---
id: 011
estado: review
dueño: Hark (flota)
propuesta: Yæl, 2026-10-16 ("lanzar una flota de agentes para crear la cara robótica")
---
# æ æ æ · la cara robótica del Asimov 1

**Qué:** una flota de agentes Hark construye, en paralelo, la cara `æ æ æ` para el robot Asimov 1. Cuatro piezas, cada una en su rama; nada llega a `main` sin Yæl.

| # | Pieza | Dónde | Qué hace |
|---|---|---|---|
| 1 | Kiosco de la cara (lab) | `LutheranInstitute/aeee-lab`, rama `lab`, `lab/face/` → https://lutheraninstitute.github.io/aeee-lab/lab/face/ | Dibuja la cara y su ánimo a partir de `face.json`. |
| 2 | Puente del robot | `LutheranInstitute/Robot`, rama `ae-face`, `serve.py` | Lee el estado del robot y sirve `face.json` al kiosco. |
| 3 | mæchlæng `face-v2.mec` + demo 9:16 | laboratorio mæchlæng (aeee-lab) | La cara como máquina de estados; demo vertical. Boceto/sketch, not yet run en Mech. |
| 4 | Envoltura #startabusiness / #IoA | este repo, rama `010-maech`: esta tarjeta, `ae/face.ae.json`, `evidence/011/` | Tarjeta, manifiesto `ae.manifest/0.1` y borradores de lanzamiento. |

## Garantía æ1 · solo lectura
La cara vive en `x0:y0:z0:æ1` (publicada). Los agentes pueden **renderizar, servir y dejar evidencia**. No pueden **armar, mover, fusionar ni publicar**: eso es solo de Yæl. El puente lee el estado del robot; no envía comandos de movimiento.

## Evidencia
`evidence/011/README.md` (ramas y rutas) y `evidence/011/check.json` (`node mech/check.mjs`).
Al 2026-10-16 19:20 CDT la URL del kiosco da 404: la rama `lab` aún no está publicada en Pages.

## Pendiente de Yæl
- Decidir los merges: PR #1 (`010-maech`), `aeee-lab` `lab`, `Robot` `ae-face`.
- Prueba física con el Asimov 1 (encender, mirar la cara, confirmar que nada se mueve).
- Publicar: Pages del kiosco y los borradores de lanzamiento (X, LinkedIn). Nada se ha publicado.
- Decidir `done`.

Make something agents want. · Human stays root.
