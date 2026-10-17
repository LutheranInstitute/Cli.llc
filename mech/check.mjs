#!/usr/bin/env node
// mæch check · hace cumplir mech/board.mec sobre cards/ y STATE.md
// uso: node mech/check.mjs [--json evidence/<id>/check.json]
import { readFileSync, readdirSync, writeFileSync, mkdirSync } from "node:fs";
import { createHash } from "node:crypto";
import { dirname } from "node:path";

const ESTADOS = ["triage","todo","ready","running","blocked","review","done","archived"];
const RIESGO = /aprobaci[oó]n:\s*requerida/i;
const root = new URL("..", import.meta.url).pathname;
const errs = [], warns = [], cards = [];

const front = t => { const m = t.match(/^---\n([\s\S]*?)\n---/); const o = {};
  if (m) for (const l of m[1].split("\n")) { const i = l.indexOf(":"); if (i > 0) o[l.slice(0,i).trim()] = l.slice(i+1).trim(); }
  return o; };

for (const f of readdirSync(root + "cards").filter(f => f.endsWith(".md")).sort()) {
  const t = readFileSync(root + "cards/" + f, "utf8"), fm = front(t);
  const c = { file: f, id: fm.id, estado: fm.estado, dueno: fm["dueño"], riesgo: RIESGO.test(t),
    aprobada: /^aprobada:\s*(?!pendiente)\S/im.test(t), sha256: createHash("sha256").update(t).digest("hex") };
  if (!c.id) errs.push(`${f}: sin id`);
  if (!ESTADOS.includes(c.estado)) errs.push(`${f}: estado desconocido "${c.estado}"`);
  if (c.estado === "done" && !/yæl|yael/i.test(fm.cerrada || "")) errs.push(`${f}: done sin "cerrada: Yæl" (done lo decide Yæl)`);
  if (c.riesgo && !c.aprobada && ["ready","running"].includes(c.estado)) errs.push(`${f}: riesgo sin aprobación en ${c.estado}`);
  if (c.estado === "review" && !c.riesgo && !readdirSafe(root + "evidence/" + c.id) && !/evidencia/i.test(t)) warns.push(`${f}: review sin evidencia`);
  cards.push(c);
}
function readdirSafe(p) { try { return readdirSync(p).length > 0; } catch { return false; } }

const state = readFileSync(root + "STATE.md", "utf8");
const rows = Object.fromEntries([...state.matchAll(/^\|\s*(\d{3})\s*\|[^|]*\|\s*([a-z]+)\s*\|/gm)].map(m => [m[1], m[2]]));
for (const c of cards) {
  if (!(c.id in rows)) errs.push(`STATE.md: falta la tarjeta ${c.id}`);
  else if (rows[c.id] !== c.estado) errs.push(`STATE.md: ${c.id} dice "${rows[c.id]}", la tarjeta dice "${c.estado}"`);
}
for (const id of Object.keys(rows)) if (!cards.find(c => c.id === id)) errs.push(`STATE.md: ${id} no tiene tarjeta`);

const out = { schema: "ae.mech.check/0.1", rules: "mech/board.mec", at: new Date().toISOString(),
  ok: errs.length === 0, errors: errs, warnings: warns, cards,
  principle: "Evidence ≠ Authority: supervision informs, the human decides." };
const j = process.argv.indexOf("--json");
if (j > 0) { mkdirSync(dirname(process.argv[j+1]), { recursive: true }); writeFileSync(process.argv[j+1], JSON.stringify(out, null, 2) + "\n"); }
for (const c of cards) console.log(`${c.id}  ${c.estado.padEnd(8)} ${c.riesgo ? "⚠ riesgo" : "        "} ${c.file}`);
for (const w of warns) console.log("· " + w);
for (const e of errs) console.log("✗ " + e);
console.log(out.ok ? "✓ tablero válido · Human stays root." : `✗ ${errs.length} error(es)`);
process.exit(out.ok ? 0 : 1);
