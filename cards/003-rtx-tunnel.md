---
id: 003
estado: todo
dueño: Yæl
---
# Túnel RTX: Victus → droplet

1. En Victus: `bash rtx-bridge.sh up` y luego `bash rtx-bridge.sh test`.
2. Una vez como admin: `rtx-bridge-persist.bat`.
3. Volver a hornear: `deploy_droplet.sh` → `droplet.html`.

**Evidencia:** respuesta de `ae.vps.rtx?op=status` con `ok: true`.
