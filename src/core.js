const TYPES = new Set(["daily-report", "defect", "inspection", "meeting"]);

export function createRecord(type, data = {}) {
  if (!TYPES.has(type)) throw new Error("Unsupported record type");
  const now = new Date().toISOString();
  return {
    id: data.id || crypto.randomUUID(),
    type,
    title: String(data.title || "").trim(),
    project: String(data.project || "").trim(),
    status: String(data.status || "open"),
    date: data.date || now.slice(0, 10),
    notes: String(data.notes || "").trim(),
    createdAt: data.createdAt || now,
    updatedAt: now
  };
}

export function validateRecord(record) {
  const errors = [];
  if (!record || !TYPES.has(record.type)) errors.push("type");
  if (!record?.title?.trim()) errors.push("title");
  if (!record?.date) errors.push("date");
  return { valid: errors.length === 0, errors };
}

export function toCSV(records = []) {
  const headers = ["id","type","title","project","status","date","notes","createdAt","updatedAt"];
  const esc = value => '"' + String(value ?? "").replaceAll('"', '""') + '"';
  return [headers.join(","), ...records.map(r => headers.map(h => esc(r[h])).join(","))].join("\n");
}

export function summarize(records = []) {
  return records.reduce((acc, r) => {
    acc.total += 1;
    acc.byType[r.type] = (acc.byType[r.type] || 0) + 1;
    acc.byStatus[r.status] = (acc.byStatus[r.status] || 0) + 1;
    return acc;
  }, { total: 0, byType: {}, byStatus: {} });
}
