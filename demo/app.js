import { createRecord, summarize, toCSV } from "../src/core.js";
import { loadRecords, saveRecords, exportJSON } from "../src/storage.js";

const form = document.querySelector("#record-form");
const list = document.querySelector("#records");
const summaryEl = document.querySelector("#summary");
let records = loadRecords();

form.date.value = new Date().toISOString().slice(0, 10);

function download(name, text, type) {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([text], { type }));
  a.download = name;
  a.click();
  URL.revokeObjectURL(a.href);
}

function render() {
  const summary = summarize(records);
  summaryEl.textContent = `${summary.total} record${summary.total === 1 ? "" : "s"}`;
  list.innerHTML = "";
  for (const record of [...records].reverse()) {
    const article = document.createElement("article");
    article.className = "card record";
    article.innerHTML = `
      <div><span class="pill">${record.type}</span><span class="pill">${record.status}</span></div>
      <h2></h2><p class="meta"></p><p class="notes"></p>
    `;
    article.querySelector("h2").textContent = record.title;
    article.querySelector(".meta").textContent = [record.project, record.date].filter(Boolean).join(" · ");
    article.querySelector(".notes").textContent = record.notes;
    list.append(article);
  }
}

form.addEventListener("submit", event => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(form));
  records.push(createRecord(data.type, data));
  saveRecords(records);
  form.reset();
  form.date.value = new Date().toISOString().slice(0, 10);
  render();
});

document.querySelector("#export-json").onclick = () =>
  download("baupilot-community.json", exportJSON(records), "application/json");

document.querySelector("#export-csv").onclick = () =>
  download("baupilot-community.csv", toCSV(records), "text/csv");

render();
