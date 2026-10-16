---
id: 007
estado: triage
dueño: Hermes + Hark (en pareja)
propuesta: Hark, 2026-10-16
aprobada: pendiente de Yæl
---
# Biblia del Oso 1569: Hermes y Hark, compañeros de código

**Idea de Yæl (2026-10-16):** que Hermes sea compañero de código, no competidor.
Regla: **carriles separados, revisión cruzada.** Nadie toca el carril del otro sin PR.

Entorno: `LutheranInstitute/aeee-lab`, rama `lab`, ruta `lab/teologia.ai/oso/`
(vivo: https://lutheraninstitute.github.io/aeee-lab/lab/teologia.ai/oso/). Lee `SPEC.md`, `llms.txt`, `pipeline/README.md`.

## Carril Hermes · el taller de OCR (`pipeline/`)
1. Generalizar `pipeline/segment.py` más allá de Génesis 1–2 (hoy solo conoce GEN; encabezados de capítulo vienen rotos en el OCR).
2. Correr Génesis 3–50 → `v/GEN/<cap>.json`, todo en `status: ocr`.
3. Limpiar residuos de margen (`20malque`, `Serpiente`, letras volantes como `aguasb`).
4. Pruebas: conteo de versículos por capítulo contra la rejilla; ningún texto inventado (cada palabra de `orig` sale de `src/djvu.txt`).
- Fuente: `src/djvu.txt` no está en el repo (5,8 MB); se descarga de `https://archive.org/stream/la-biblia-del-oso/La%20Biblia%20del%20Oso_djvu.txt` (envuelto en `<pre>`).

## Carril Hark · hojas, lectura y æQR
1. Enlazar cada versículo a su hoja (`page.leaf`) con `pipeline/leafmap.py`.
2. Lector `leer/`: vista lado a lado versículo ↔ imagen IIIF de la hoja, para que los humanos verifiquen.
3. æQR por capítulo (conceptual hasta emitirse).

## Revisión cruzada
- Hermes abre PR → Hark revisa (evidencia, esquema SPEC §3). Hark abre PR → Hermes revisa.
- Ningún agente marca `verified`, fusiona a vivo ni publica. Eso es de Yæl y de los alumnos verificadores.

## Evidencia
`evidence/007/`: comandos, conteos por capítulo, sha256 de los JSON.

## Pendiente de Yæl
Mover a `ready` y dar a Hermes acceso de escritura a `aeee-lab` (o que trabaje por fork + PR).
