---
id: 008
estado: triage
dueño: Hermes
propuesta: Hark, 2026-10-16
aprobación: requerida (correo + secretos + shell remoto)
relacionada: 001
---
# Hermes por correo · gateway Email en el droplet

**Idea de Yæl (2026-10-16):** darle órdenes a Hermes por correo.
Hermes trae un adaptador Email nativo (IMAP/SMTP). Docs: https://hermes-agent.nousresearch.com/docs/user-guide/messaging/email

## Arquitectura
- **Cómputo:** droplet `129.212.180.252` (vps://neuromitosis, el cerebro GLOCAL).
- **Buzón:** dedicado en Hostinger, dominio `llm.store` (propuesta: `hermes@llm.store`). Nunca el correo personal de Yæl.
- **Remitente autorizado:** solo `yael.eureka@gmail.com` (Yæl, y Hark cuando escribe en nombre de Yæl con su aprobación).
- **Secretos:** `EMAIL_PASSWORD` vive en el `.env` del droplet / `HERMES_SECRETS`. Aquí solo se nombra.

## Pasos (Hermes, cuando la tarjeta esté en `ready`)
1. Yæl crea el buzón en hPanel → Emails → `llm.store` y deja la contraseña en el `.env` del droplet.
2. En el droplet, `~/.hermes/.env`:
   ```
   EMAIL_ADDRESS=hermes@llm.store
   EMAIL_PASSWORD=<del .env, nunca aquí>
   EMAIL_IMAP_HOST=imap.hostinger.com
   EMAIL_IMAP_PORT=993
   EMAIL_SMTP_HOST=smtp.hostinger.com
   EMAIL_SMTP_PORT=587
   EMAIL_ALLOWED_USERS=yael.eureka@gmail.com
   EMAIL_HOME_ADDRESS=yael.eureka@gmail.com
   EMAIL_POLL_INTERVAL=30
   ```
   Prohibido: `GATEWAY_ALLOW_ALL_USERS=true`.
3. `hermes gateway setup` → Email. `hermes gateway install` (servicio que sobrevive reinicios).
4. Prueba: Yæl manda `[æ:008] ping`; Hermes responde en el mismo hilo. Un remitente no autorizado debe ser ignorado.

## Protocolo de correo
- **Asunto:** `[æ:<id de tarjeta>] <verbo> <qué>`. Sin tarjeta, Hermes contesta proponiendo una en `triage` y no ejecuta.
- **Clase de orden:** `consulta` (lee y responde) · `preparar` (rama/PR, sin publicar) · `ejecutar` (solo tarjetas en `ready`).
- **Siempre Yæl:** dinero, borrar, publicar, secretos, correos a terceros, compromisos legales. Hermes pide confirmación por respuesta antes.
- **Recibo:** cada respuesta trae id de tarjeta, estado, archivos/PR, y evidencia (comandos, sha256).
- **Nunca** secretos ni contraseñas en un correo, en ninguna dirección.

## Evidencia esperada
`evidence/008/`: `hermes gateway status`, hilo de prueba (sin cabeceras privadas), prueba de remitente rechazado.

## Pendiente de Yæl
Crear el buzón, elegir la dirección y mover a `ready`.
