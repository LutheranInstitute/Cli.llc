---
id: 001
estado: todo
dueño: Hermes
aprobación: requerida (expone API y shell)
---
# Hermes API Server en el droplet

**Objetivo:** Hermes API en `127.0.0.1:8642`, publicado por el nginx existente con TLS (certbot) en un subdominio.

**Pasos**
1. Confirmar que Hermes está instalado en el droplet.
2. `.env`: `API_SERVER_ENABLED=true`, `API_SERVER_KEY` desde la bóveda.
3. Limitar toolsets: sin terminal libre; lista permitida al estilo `dispatch.py`.
4. nginx `server` → `proxy_pass` a `127.0.0.1:8642` + certbot.
5. Probar `/health` y `/v1/capabilities`.

**Evidencia esperada:** salida de `/health`, `/v1/capabilities`, `nginx -t`, certificado.
