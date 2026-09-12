const KEY = "baupilot-community-v1";

export function loadRecords(storage = localStorage) {
  try {
    const value = JSON.parse(storage.getItem(KEY) || "[]");
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

export function saveRecords(records, storage = localStorage) {
  storage.setItem(KEY, JSON.stringify(records));
}

export function exportJSON(records) {
  return JSON.stringify({ version: 1, exportedAt: new Date().toISOString(), records }, null, 2);
}

export function importJSON(text) {
  const parsed = JSON.parse(text);
  if (!parsed || parsed.version !== 1 || !Array.isArray(parsed.records)) {
    throw new Error("Unsupported BauPilot Community export");
  }
  return parsed.records;
}
