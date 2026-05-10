# VitaPet — Suplemento inmunológico para mascotas

Sitio web comercial de VitaPet Inmuno+, suplemento de seis hongos medicinales nativos de Chile (Cola de Pavo, Reishi, Shiitake, Melena de León, Maitake y Chaga) en formato doypack de 60 g · polvo liofilizado.

- Stack: React 19 + TanStack Start + Vite 7 + Tailwind CSS v4
- Tipografías: Playfair Display + Montserrat
- Animaciones de scroll con IntersectionObserver
- Compra vía mailto a `vitapetinmunomas@gmail.com` (próximamente Webpay y Mercado Libre)

## Desarrollo local

```bash
bun install
bun run dev
```

Abre http://localhost:3000.

## Build de producción

```bash
bun run build
bun run start
```

## Despliegue

El proyecto está configurado para Cloudflare Workers (`wrangler.jsonc`).
También funciona en cualquier host Node compatible con TanStack Start
(Vercel, Netlify, Fly.io, VPS).

### Cloudflare Workers

```bash
bun run build
bunx wrangler deploy
```

### Vercel / Netlify

Conecta el repositorio de GitHub. Comando de build: `bun run build`.
Directorio de salida: `.output` (TanStack Start).

## Estructura

```
src/
├── routes/              # Rutas (TanStack file-based)
│   ├── __root.tsx       # Layout raíz (head, fuentes)
│   └── index.tsx        # Home
├── components/
│   ├── sections/        # Hero, Mushrooms, Benefits, Product…
│   ├── Navbar.tsx · Footer.tsx · Logo.tsx
│   └── ui/              # shadcn primitives
├── assets/              # Imágenes generadas
├── hooks/use-reveal.ts  # Animaciones al hacer scroll
├── lib/links.ts         # mailto de compra
└── styles.css           # Design tokens (colores, gradientes)
```

## Personalización rápida

- **Email de compra**: `src/lib/links.ts`
- **Precio**: buscar `$22.000` en `src/components/sections/`
- **Colores**: `src/styles.css` (tokens `--forest`, `--leaf`, `--gold`, `--cream`)

## Conectar con GitHub

Desde Lovable: menú `+` → GitHub → Connect project → Create Repository.
Cualquier cambio en Lovable se sincroniza al repo y viceversa.

## Licencia

Propietario · VitaPet © 2025
