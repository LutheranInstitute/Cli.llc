# >_ mæch · el tablero de cli.llc en mæchlæng

Las reglas de la casa, como máquina de estados.

```
triage → todo → ready → running → review → done → archived
                 ▲ riesgo: espera aprobación de Yæl      ▲ solo Yæl
```

| Archivo | Qué es |
|---|---|
| `board.mec` | El tablero en mæchlæng. Boceto/sketch, not yet run. |
| `check.mjs` | Lo hace cumplir hoy, sin dependencias. |

```bash
node mech/check.mjs                                  # revisa el tablero
node mech/check.mjs --json evidence/<id>/check.json  # deja recibo
```

Many agents. One principal. · *Evidence ≠ Authority* · Human stays root.

Mech es de Corey Montella, Apache-2.0 ([mech-lang.org](https://mech-lang.org)); mæch no está afiliado. Laboratorio: [aeee-lab/lab/maechlang](https://lutheraninstitute.github.io/aeee-lab/lab/maechlang/).
