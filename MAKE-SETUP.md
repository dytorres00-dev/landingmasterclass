# Guía · Conectar el formulario con Google Sheets + Gmail (Make.com)

Tu landing ya envía cada registro a Make. Falta armar el escenario que:

1. **Recibe** el registro (webhook)
2. **Guarda** una fila en Google Sheets
3. **Envía** un correo automático con Gmail

Flujo final:

```
Landing → /api/register → Webhook Make → [Google Sheets] → [Gmail]
```

Tiempo estimado: ~15 minutos. No se toca código.

---

## Paso 0 · Prepara el Google Sheet

1. Crea una hoja nueva en Google Sheets, por ej. **"Registros Masterclass"**.
2. En la **fila 1** pon estos encabezados, uno por columna (A, B, C…):

   | A | B | C | D | E | F | G |
   |---|---|---|---|---|---|---|
   | Fecha | Nombre | Email | WhatsApp | Rol | Uso de IA | Reto |

Déjala abierta, la usarás en el Paso 3.

---

## Paso 1 · Crea el webhook en Make

1. Entra a [make.com](https://make.com) → **Create a new scenario**.
2. Clic en el `+` grande → busca **Webhooks** → elige **Custom webhook**.
3. Clic en **Add** → nómbralo `Registro Masterclass` → **Save**.
4. Make te da una URL tipo `https://hook.us2.make.com/xxxxxxxx`. **Cópiala.**
5. Deja el módulo en **"Waiting for data"** (no cierres esa ventana).

### Pega la URL en tu proyecto

En la carpeta del proyecto, crea el archivo `.env.local` (copia de `.env.example`)
y pega la URL:

```
MAKE_WEBHOOK_URL=https://hook.us2.make.com/xxxxxxxx
```

> ⚠️ En producción (Vercel/hosting), agrega esa misma variable `MAKE_WEBHOOK_URL`
> en la configuración de variables de entorno del hosting. **No** subas `.env.local` a git.

### Manda un registro de prueba para que Make "aprenda" los campos

Con `MAKE_WEBHOOK_URL` ya pegada:

```bash
npm run dev
```

Abre la landing, llena el formulario y envíalo (o usa el botón real).
Make detectará la estructura del JSON y mostrará **"Successfully determined"**.
Ahora Make ya conoce los campos: `nombre`, `email`, `whatsapp`, `rolLabel`,
`usoIALabel`, `retoLabel`, `createdAt`, etc.

---

## Paso 2 · Guardar en Google Sheets

1. En el escenario, clic en el `+` a la derecha del webhook.
2. Busca **Google Sheets** → elige **Add a Row**.
3. **Connection** → *Add* → inicia sesión con tu cuenta de Google y autoriza.
4. Configura:
   - **Spreadsheet**: elige "Registros Masterclass".
   - **Sheet**: `Hoja 1` (o como se llame).
   - **Table contains headers**: `Yes`.
5. Ahora aparecen tus columnas (Fecha, Nombre, Email…). Asigna cada una
   arrastrando el campo del webhook:

   | Columna | Campo del webhook |
   |---------|-------------------|
   | Fecha | `createdAt` |
   | Nombre | `nombre` |
   | Email | `email` |
   | WhatsApp | `whatsapp` |
   | Rol | `rolLabel` |
   | Uso de IA | `usoIALabel` |
   | Reto | `retoLabel` |

6. **OK**.

---

## Paso 3 · Enviar el correo automático con Gmail

1. Clic en el `+` a la derecha del módulo de Sheets.
2. Busca **Gmail** → elige **Send an Email**.
3. **Connection** → *Add* → autoriza tu cuenta de Gmail.
4. Configura:
   - **To**: arrastra el campo `email` del webhook (el correo del registrado).
   - **Subject**: `¡Estás dentro de la Masterclass! 🎟️`
   - **Content type**: `HTML`
   - **Content**: pega esto (usa el botón para insertar el campo `nombre`
     donde ves `{{nombre}}`):

     ```html
     <p>Hola {{nombre}},</p>
     <p>¡Confirmado! Tu lugar en la Masterclass de IA para negocios está reservado.</p>
     <p><strong>📅 Jueves 24 de julio · 7:00 p.m. (COL)</strong><br>
     60 minutos en vivo + sesión de preguntas.</p>
     <p>El enlace para entrar en vivo es:<br>
     <a href="TU-ENLACE-DE-ZOOM-O-MEET">Entrar a la sesión</a></p>
     <p>Te enviaremos también un recordatorio por WhatsApp antes de empezar.</p>
     <p>Nos vemos pronto,<br>Dylan Torres</p>
     ```

   > Reemplaza `TU-ENLACE-DE-ZOOM-O-MEET` por el enlace real de la sesión.

5. **OK**.

---

## Paso 4 · Activar y probar

1. Abajo a la izquierda, activa el interruptor **"Scheduling"** a **ON**
   (para que corra automático con cada registro).
2. Clic en **Save** (💾) y luego en **Run once** para una prueba controlada.
3. Envía un registro real desde la landing.
4. Verifica:
   - ✅ Aparece una fila nueva en tu Google Sheet.
   - ✅ Llega el correo a la dirección que pusiste en el formulario.

Si algo falla, en Make cada módulo muestra el error exacto (normalmente es un
campo sin mapear o la conexión de Google sin autorizar).

---

## Notas

- **La URL del webhook es secreta** y solo vive en el servidor (`.env.local` /
  variables de hosting). Nunca se expone al navegador — el `/api/register`
  hace de intermediario y valida los datos con Zod antes de reenviarlos.
- Si más adelante quieres además **recordatorios por WhatsApp**, se agrega otro
  módulo en el mismo escenario (ej. Twilio / 360dialog) usando el campo `whatsapp`.
- El correo de "ya estás dentro" que promete la landing
  ([SuccessState.tsx](components/form/SuccessState.tsx)) es justamente este del Paso 3.
