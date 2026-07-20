# Studio Cromatik

Sitio web de Studio Cromatik. Construido con Next.js (App Router), TypeScript y Tailwind CSS. Preparado para desplegarse en Vercel y para conectar Supabase más adelante.

## 1. Correrlo en tu computadora

Necesitas tener [Node.js](https://nodejs.org) instalado (versión 18 o más reciente).

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) para ver el sitio.

## 2. Editar el contenido

Casi todo el texto del sitio (títulos, servicios, testimonios, datos de contacto) vive en un solo archivo:

```
lib/content.ts
```

Cambia los valores ahí y se actualizan en toda la página. No necesitas tocar los componentes para editar textos.

Para cambiar el logo, reemplaza `public/logo.png` (y `app/icon.png`, que es el favicon) por tu propio archivo con el mismo nombre.

Los colores de marca están definidos en `tailwind.config.ts`:

| Nombre | Hex |
|---|---|
| pine | `#446452` |
| lilac | `#ADA8D3` |
| chartreuse | `#D4D91F` |
| blush | `#F5BFCB` |
| paper (fondo) | `#FAF9F4` |
| ink (texto) | `#2B2B26` |

## 3. Subir el código a GitHub

```bash
git init
git add .
git commit -m "Primer commit: sitio Studio Cromatik"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/studio-cromatik.git
git push -u origin main
```

Reemplaza la URL por la de tu propio repositorio (créalo primero vacío en github.com).

## 4. Desplegar en Vercel

1. Entra a [vercel.com](https://vercel.com) e inicia sesión con tu cuenta de GitHub.
2. Haz clic en "Add New Project" y selecciona el repositorio `studio-cromatik`.
3. Vercel detecta automáticamente que es un proyecto Next.js — no necesitas cambiar ninguna configuración.
4. Haz clic en "Deploy". En un par de minutos tendrás una URL pública.
5. Desde el mismo proyecto en Vercel puedes conectar tu dominio propio en Settings → Domains.

Cada vez que hagas `git push` a la rama `main`, Vercel vuelve a desplegar el sitio automáticamente.

## 5. Conectar Supabase (cuando lo necesites)

El proyecto ya incluye el paquete `@supabase/supabase-js` y un cliente preparado en `lib/supabase.ts`, pero todavía no está conectado a ninguna función (el formulario de contacto es solo informativo por ahora).

Cuando quieras activar el formulario de contacto, un blog, o cualquier otra función con base de datos:

1. Crea un proyecto gratis en [supabase.com](https://supabase.com).
2. Copia `.env.local.example` a `.env.local` y llena las dos variables con los datos de tu proyecto (Settings → API).
3. En Vercel, agrega esas mismas variables en Settings → Environment Variables.
4. Avísame y te ayudo a construir la tabla y conectar el formulario.

## Estructura del proyecto

```
app/            Páginas y layout (Next.js App Router)
components/     Cada sección del sitio (Navbar, Hero, Servicios, etc.)
lib/content.ts  Todo el texto editable del sitio
lib/supabase.ts Cliente de Supabase, listo para usarse más adelante
public/         Logo e imágenes públicas
```
# studio-cromatik
