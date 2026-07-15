# Masterclass Landing · Dylan Torres

Landing page de alta conversión para registro a masterclass en vivo sobre
inteligencia artificial aplicada a negocios. Construida con Next.js 14 (App
Router), TypeScript, Tailwind CSS y Framer Motion.

## Stack

- **Next.js 14** (App Router) + **TypeScript** estricto
- **Tailwind CSS** con tokens de marca en `tailwind.config.ts`
- **Framer Motion** para animaciones sutiles
- **react-hook-form + zod** para validación de formulario
- **lucide-react** para iconografía outline
- **next/font/google** cargando Cormorant Garamond + Inter

## Estructura

```
app/
  layout.tsx          # fonts + metadata
  page.tsx            # composición de secciones
  globals.css         # reset + tokens + reduced motion
  api/register/route.ts
components/
  sections/           # Hero, Problema, Agitacion, Solucion, Plan, Registro
  form/               # RegisterForm, TextField, RadioGroup, SuccessState
  ui/                 # Container, SectionHeading, Button, ScrollReveal
lib/
  schema.ts           # zod schema compartido cliente/servidor
  motion.ts           # variants reusables de Framer Motion
```

## Configuración

1. **Instalar dependencias**

   ```bash
   cd masterclass-landing
   npm install
   ```

2. **Configurar variables de entorno**

   Copia `.env.example` a `.env.local` y pega la URL de tu webhook de Make:

   ```bash
   cp .env.example .env.local
   ```

   Edita `.env.local` y reemplaza `MAKE_WEBHOOK_URL` con la URL real.

3. **Correr en desarrollo**

   ```bash
   npm run dev
   ```

   Abre [http://localhost:3000](http://localhost:3000)

## Build de producción

```bash
npm run build
npm run start
```

## Webhook de Make.com

Los registros se envían como POST a la URL configurada en `MAKE_WEBHOOK_URL`.
El body es JSON con esta forma:

```json
{
  "nombre": "string",
  "email": "string",
  "whatsapp": "string",
  "rol": "dueno | gerente | emprendedor | otro",
  "rolLabel": "Dueño de negocio",
  "usoIA": "nada | basico | implementado",
  "usoIALabel": "No, nada todavía",
  "reto": "tiempo | clientes | empezar | otro",
  "retoLabel": "Perder tiempo en tareas repetitivas",
  "createdAt": "ISO 8601",
  "source": "landing-masterclass-dylan-torres"
}
```

Cada campo `*Label` es la versión legible del valor crudo, pensada para
mapearse directo a una columna del Google Sheet y al cuerpo del correo.

La URL del webhook **nunca** se expone al cliente: la llamada pasa por
`/api/register`, que valida con zod y luego hace el fetch al webhook de Make.

## Identidad de marca

| Token       | Valor      | Uso |
|-------------|------------|-----|
| `beige`     | `#F4EFE7`  | Fondos de sección cálidos |
| `bone`      | `#FAF8F5`  | Fondo base |
| `forest`    | `#1F3A32`  | Color principal (acentos, botón CTA, fondo invertido) |
| `carbon`    | `#1F1F1F`  | Texto principal |
| `gold`      | `#B69463`  | Acento editorial (líneas, focos) |

Tipografía: **Cormorant Garamond** (títulos) + **Inter** (cuerpo).
