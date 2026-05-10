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

### Vercel (recomendado)

1. Conecta el repo de GitHub en <https://vercel.com/new>.
2. Vercel detecta `vercel.json` automáticamente:
   - Build: `bun run build`
   - Output: `.output/public`
3. No se necesitan variables de entorno para la versión actual (compra por mailto).

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
