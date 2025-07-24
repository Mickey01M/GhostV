function saveEntry() {
  const text = document.getElementById('entry').value;
  if (text.trim() === "") return;
  const entries = JSON.parse(localStorage.getItem('ghostvEntries')) || [];
  entries.unshift({ text, date: new Date().toLocaleString() });
  localStorage.setItem('ghostvEntries', JSON.stringify(entries));
  document.getElementById('entry').value = "";
  displayEntries();
}

function displayEntries() {
  const entries = JSON.parse(localStorage.getItem('ghostvEntries')) || [];
  const container = document.getElementById('entries');
  container.innerHTML = "";
  entries.forEach(entry => {
    const div = document.createElement('div');
    div.className = 'entry';
    div.innerHTML = `<p>${entry.date}</p><p>${entry.text}</p><hr/>`;
    container.appendChild(div);
  });
}

window.onload = () => {
  displayEntries();
};
document.getElementById("langToggleBtn").addEventListener("click", () => {
  const es = document.getElementById("manifesto-es");
  const en = document.getElementById("manifesto-en");
  const btn = document.getElementById("langToggleBtn");

  if (es.style.display === "none") {
    es.style.display = "block";
    en.style.display = "none";
    btn.textContent = "🌐 English version";
  } else {
    es.style.display = "none";
    en.style.display = "block";
    btn.textContent = "🌐 Versión en español";
  }
});
