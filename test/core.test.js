import test from "node:test";
import assert from "node:assert/strict";
import { createRecord, validateRecord, summarize, toCSV } from "../src/core.js";

test("creates and validates a defect record", () => {
  const record = createRecord("defect", { title: "Door closer missing", date: "2026-09-12" });
  assert.equal(record.type, "defect");
  assert.equal(validateRecord(record).valid, true);
});

test("rejects unsupported workflow type", () => {
  assert.throws(() => createRecord("invoice", { title: "x" }));
});

test("summarizes records", () => {
  const records = [
    createRecord("defect", { title: "A" }),
    createRecord("inspection", { title: "B", status: "closed" })
  ];
  const summary = summarize(records);
  assert.equal(summary.total, 2);
  assert.equal(summary.byType.defect, 1);
  assert.equal(summary.byStatus.closed, 1);
});

test("exports CSV", () => {
  const csv = toCSV([createRecord("meeting", { title: 'Coordination "A"' })]);
  assert.match(csv, /Coordination ""A""/);
});
