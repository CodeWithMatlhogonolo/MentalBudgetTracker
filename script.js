// script.js
const form = document.getElementById("energyForm");
const entryInput = document.getElementById("entryInput");
const energyType = document.getElementById("energyType");
const entryList = document.getElementById("entryList");
const reportSection = document.getElementById("reportSection");

let entries = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const entry = {
    text: entryInput.value,
    type: energyType.value
  };
  entries.push(entry);
  updateList();
  generateReport();
  form.reset();
});

function updateList() {
  entryList.innerHTML = "";
  entries.forEach((entry, index) => {
    const li = document.createElement("li");
    li.textContent = entry.text;
    li.classList.add(entry.type);
    entryList.appendChild(li);
  });
}

function generateReport() {
  const positives = entries.filter(e => e.type === "positive").length;
  const negatives = entries.filter(e => e.type === "negative").length;
  const score = positives - negatives;

  let message = "";
  if (score > 2) message = "You're in a great mental space. Keep going! 💪";
  else if (score >= 0) message = "You're doing okay, but protect your energy.";
  else message = "You're mentally overspending. Rest. Recharge. 🧘";

  reportSection.innerHTML = `
    <h3>🧾 Mind Budget Report</h3>
    <p>Positive: ${positives}, Draining: ${negatives}</p>
    <p><strong>${message}</strong></p>
  `;
}
