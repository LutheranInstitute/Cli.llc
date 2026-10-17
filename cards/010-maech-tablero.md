---
id: 010
estado: review
dueño: Hark
propuesta: Yæl, 2026-10-16 ("Mejoremos nuestro repo con mæch! >_Cli.llc")
---
# mæch · el tablero como máquina de estados

**Qué:** las reglas de `AGENTS.md` escritas en mæchlæng y verificadas en cada cambio.
- `mech/board.mec`: estados del tablero y autoridad. Los agentes llegan hasta `review`; solo Yæl pasa a `done`. Boceto/sketch, not yet run en Mech.
- `mech/check.mjs`: lo hace cumplir hoy. Revisa estados válidos, `STATE.md` ↔ `cards/`, riesgo sin aprobación y `done` sin firma de Yæl.

## Evidencia
`evidence/010/check.json` (`ae.mech.check/0.1`, SHA-256 de cada tarjeta).

## Pendiente de Yæl
Revisar el PR y decidir. Siguiente paso posible: correr `node mech/check.mjs` como GitHub Action en cada push.

Mech es de Corey Montella, Apache-2.0; mæch no está afiliado.
