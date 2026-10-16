# $curator · registro del IoA

*Corte: 2026-10-16T10:31-05:00 · curador: Hark · Evidence ≠ Authority: el curador informa, Yæl decide.*

## Agentes
| id | rol | runtime | carriles |
|---|---|---|---|
| Yæl Méndez | principal | — | — |
| Hark | preparador / curador | Hark Pro (nube) | 006, 007 (hojas/lector/æQR), 004 |
| Hermes æ | ejecutor / conductor GLOCAL (SchemeDispatcher) | Hermes Cloud (Nous Portal) + droplet vps://neuromitosis | 001, 005, 007 (OCR), 008 |
| Codex | código | OpenAI | — |

## Nodos
| nodo | dirección | salud | nota |
|---|---|---|---|
| droplet | vps://neuromitosis · 129.212.180.252 | degradado | :3000/xrpc/ae.vps.rtx?op=status → 200; :80 → 502 |
| victus | rtx3050:// · pc://mesh/victus/local | inalcanzable desde el droplet (túnel :3050 caído) | bash rtx-bridge.sh up · tarjeta 003 (Yæl) |
| pages-ae | myaelmendez.github.io | 200 |  |
| pages-li | lutheraninstitute.github.io | 200 |  |

## Rutas Hæbbianas (peso 0–1, propuesta)
| cadena | peso | nota |
|---|---|---|
| Hark → Composio GITHUB_COMMIT_MULTIPLE_FILES → LutheranInstitute/* | 0.9 | confiable; límite ~92 KB por archivo |
| Hark → codeload.github.com tarball → lectura de repos | 0.8 | lectura rápida sin token |
| Hark → conector GitHub nativo | 0.2 | 409 ambiguous_account (dos cuentas sin email) |
| Hark → navegador → Hostinger vía Google | 0.0 | 2026-10-16: Google rechazó contraseña; recuperación bloqueada unas horas |
| droplet :3000 → túnel → victus :3050 | 0.1 | caído hoy |

## Higiene (propuestas para Yæl)
- 008 depende de: buzón en llm.store (Yæl) → 001/Hermes en droplet; 003 (túnel) no bloquea 008.
- nginx :80 da 502 desde al menos 2026-10-13: proponer tarjeta o incluir en 001.
- Dos cuentas GitHub conectadas a Hark sin email: reconectar o nombrar para quitar ambigüedad.
- Licencia de Codæ Mail pendiente (¿MIT?).

## DAG siguiente (tarjeta 008)
```
buzón llm.store (Yæl) → 008 a ready (Yæl) → gateway en droplet (Hermes) → [æ:008] ping (Yæl+Hermes) → review
```

Datos completos: `registry.json`. Evidence ≠ Authority.
