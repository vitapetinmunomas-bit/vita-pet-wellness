# VitaPet — Suplemento inmunológico para mascotas

Sitio web comercial de **VitaPet Inmuno+**, suplemento de seis hongos medicinales nativos de Chile (Cola de Pavo, Reishi, Shiitake, Melena de León, Maitake y Chaga). Disponible en dos presentaciones de **60 g** de polvo liofilizado al mismo precio: **frasco de vidrio** y **doypack resellable**.

- **Stack**: React 19 + TanStack Start + Vite 7 + Tailwind CSS v4
- **Idiomas**: Español (por defecto) e Inglés con toggle en el navbar / footer (persistido en `localStorage`)
- **Tipografías**: Playfair Display + Montserrat
- **Animaciones**: scroll reveal con IntersectionObserver
- **Compra**: `mailto:` a `vitapetinmunomas@gmail.com` (Webpay y Mercado Pago próximamente)

## Desarrollo local

```bash
bun install
bun run dev
```

Abre <http://localhost:3000>.

## Build de producción

```bash
bun run build
bun run start
```

## Despliegue

### Vercel

1. Conecta el repo de GitHub en <https://vercel.com/new>.
2. En **Build & Development Settings** deja los overrides en OFF para que Vercel use `vercel.json`, o configúralos manualmente así:
   - Framework Preset: **Other** (no elijas Vite ni Next).
   - Build Command: `bun run build` (o `npm run build`).
   - Output Directory: `dist`.
   - Install Command: `bun install` (o `npm install`).
3. No pongas nunca `Output Directory = public` — no existe esa carpeta.
4. No se necesitan variables de entorno para la versión actual (compra por mailto).

> El build genera `dist/` con los assets estáticos y un `_worker.js` orientado a Cloudflare que Vercel ignora sin problemas. Si en el futuro activas server functions, habrá que cambiar de adapter o desplegar en Cloudflare Workers.


### Cloudflare Workers

```bash
bun run build
bunx wrangler deploy
```

### Otros hosts (Netlify, Fly.io, VPS Node)

Cualquier host compatible con TanStack Start funciona. Comando de build: `bun run build`.

## Conectar con GitHub desde Lovable

Menú **+** → GitHub → **Connect project** → **Create Repository**. Los cambios se sincronizan en ambos sentidos.

## Personalización rápida

| Qué            | Dónde                                         |
| -------------- | --------------------------------------------- |
| Email de compra| `src/lib/links.ts`                            |
| Precio         | buscar `$22.000` en `src/components/sections/`|
| Colores        | `src/styles.css` (`--forest`, `--leaf`, …)    |
| Traducciones   | `src/lib/i18n.tsx`                            |
| Imágenes       | `src/assets/`                                 |

## Estructura

```
src/
├── routes/                # __root.tsx, index.tsx
├── components/
│   ├── sections/          # Hero, Mushrooms, Process, Benefits, Product, Tech, Pricing, Contact
│   ├── Navbar.tsx · Footer.tsx · Logo.tsx · LanguageToggle.tsx
│   └── ui/                # shadcn primitives
├── assets/                # Hero, hongos, frasco y doypack
├── hooks/use-reveal.ts    # Animaciones scroll
├── lib/
│   ├── i18n.tsx           # Provider ES/EN + diccionario
│   └── links.ts           # mailto de compra
└── styles.css             # Design tokens
```

## Pagos online (próximamente)

La UI ya está preparada para integrar **Webpay** y **Mercado Pago**. Cuando se contraten, basta con reemplazar el handler del botón `COMPRAR` en `Pricing.tsx` y `Product.tsx` por la llamada al backend que cree la transacción.

## Licencia

Propietario · VitaPet © 2025
