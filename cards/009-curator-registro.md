---
id: 009
estado: review
dueño: Hark ($curator)
propuesta: Yæl, 2026-10-16 ("$curator · new specialty")
---
# $curator · primera corrida: registro del IoA

**Qué:** Hark como Curator Agent: descubrimiento de agentes y nodos, salud, rutas Hæbbianas, higiene y DAG siguiente.
**Dónde:** `curator/README.md` (legible) y `curator/registry.json` (`ae.curator.registry/0.1`).

## Hallazgos
- Droplet `:3000` responde pero la hoja Victus está inalcanzable; nginx `:80` sigue en 502.
- Ruta más confiable de escritura: Composio `GITHUB_COMMIT_MULTIPLE_FILES`.
- 008 depende solo del buzón en `llm.store`; 003 (túnel) no la bloquea.

## Evidencia
Sondeos HTTP 2026-10-16 10:30 CDT en `curator/registry.json` (`nodes[].probes`).

## Pendiente de Yæl
Revisar el registro y decidir `done`. El curador informa; no autoriza.
