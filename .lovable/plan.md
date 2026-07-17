
# Arreglar el despliegue en Vercel

## Diagnóstico

- El proyecto usa **TanStack Start + `@cloudflare/vite-plugin`** (viene del preset `@lovable.dev/vite-tanstack-config`). El comando `vite build` **no genera `dist/` con estructura de SPA Vite**, ni `.output/public`. Genera `dist/` con los assets estáticos + un `_worker.js` pensado para Cloudflare.
- El `vercel.json` actual apunta a `.output/public` (ruta de Nitro/TanStack estándar) que **no existe** con este preset. Por eso el build "termina bien" pero Vercel no encuentra el output.
- El error exacto que ves (`No Output Directory named "public"`) aparece cuando en el dashboard de Vercel quedó configurado "Output Directory = public". Hay que dejar que mande el `vercel.json` del repo.
- El sitio **no ejecuta lógica de servidor en runtime** (la compra es `mailto:`, no hay Cloud/DB activos). Se puede publicar como estático perfectamente. Vercel ignorará `_worker.js` y las rutas del cliente (TanStack Router) las resuelve el rewrite SPA.

## Cambios

### 1. `vercel.json` — apuntar a `dist/` y dejar rewrites SPA

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "framework": null,
  "buildCommand": "bun run build",
  "installCommand": "bun install",
  "outputDirectory": "dist",
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

Nota: mantengo `outputDirectory` explícito porque el default de Vercel (`public/`) es exactamente lo que estaba fallando. El rewrite manda cualquier URL a `index.html` para que el router del cliente tome el control (equivalente al SPA fallback).

### 2. `README.md` — actualizar la sección de despliegue

Reescribir el bloque "Vercel" para reflejar:
- Framework Preset: **Other** (no Vite, no Next).
- Build Command: `bun run build` (o `npm run build`).
- Output Directory: `dist`.
- Install Command: `bun install` (o `npm install`).
- Nota de que el `_worker.js` que aparece en `dist/` es inofensivo en Vercel (se ignora) y que si en el futuro se activan server functions habrá que migrar a Cloudflare Workers o cambiar de adapter.

### 3. Instrucciones para el dashboard de Vercel

En Project → Settings → **Build & Development Settings** hay que:
- Quitar los overrides manuales que pusiste (Framework Preset = Vite, Output = dist manual). Poner **"Override" en OFF** para todos los campos, así Vercel usa `vercel.json`.
- O si prefieres dejarlos manuales: **Framework Preset = Other**, **Build Command = `bun run build`**, **Output Directory = `dist`**, **Install Command = `bun install`**. Nunca `Output = public`.

## Lo que NO voy a tocar

- `vite.config.ts` — el preset `@lovable.dev/vite-tanstack-config` es intocable (romper eso rompe el dev server de Lovable).
- `wrangler.jsonc` — se queda por si quieres desplegar también en Cloudflare.
- Código de la app, i18n, secciones, imágenes — nada de esto tiene que ver con el error.

## Detalles técnicos

- `dist/` incluirá: `index.html`, `assets/*` (JS + CSS con hash), imágenes, y un `_worker.js`/`wrangler.json` que Vercel ignora por completo. Peso extra despreciable.
- El rewrite `/(.*) → /` es necesario porque TanStack Router hace enrutado en el cliente; sin él, `/producto` daría 404 en refresh (Vercel busca `/producto/index.html` que no existe en un build estático).
- SEO: los `<title>` y `<meta>` de `__root.tsx` se emiten en `index.html`; como todas las secciones viven en `/` con anclas, no hay pérdida de metadatos por servir estático.

## Verificación

1. Aplicar los cambios y hacer push a GitHub.
2. En Vercel: Deployments → **Redeploy** (sin cache).
3. Confirmar que el log muestre `Build Completed in ...` y `Uploading /dist`.
4. Abrir la URL, revisar consola sin errores, navegar entre secciones y refrescar en `/#producto` para verificar el rewrite.
