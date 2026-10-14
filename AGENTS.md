# AGENTS.md · reglas de la casa

Este repo es la **fuente única de verdad** de los tres amigos: Yæl, Hark y Hermes.
Si no está aquí, no pasó. Si está aquí, es lo que vale.

## Antes de actuar, todo agente:
1. Lee `README.md`, este archivo y `STATE.md`.
2. Busca la tarjeta en `cards/`. Sin tarjeta, no hay trabajo: crea una en `triage`.
3. Trabaja solo tarjetas en `ready`. Mueve a `running` al empezar.

## Al terminar:
- Deja evidencia en `evidence/<id>/` (logs, comandos, salidas, capturas, hashes).
- Mueve la tarjeta a `review`. Nunca a `done`: eso lo decide Yæl.
- Actualiza `STATE.md` en el mismo commit.

## Requiere aprobación de Yæl (siempre)
Dinero · borrar · publicar · secretos · shell remoto · correos/mensajes · compromisos legales.

## Secretos
Nunca en el repo. Viven en la bóveda de Hark o en el `.env` del droplet. Aquí solo se nombran.

## Commits
`<id>: <verbo> <qué>`, por ejemplo `001: run /health on droplet`. Autor visible: quién lo hizo (Yæl, Hark, Hermes).

## Decisiones
Cada decisión de Yæl va en `decisions/NNNN-titulo.md`: contexto, decisión, por qué, fecha.

*Evidence ≠ Authority: supervision informs, the human decides.*
