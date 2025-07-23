function resetEntries() {
  const confirm1 = confirm("¿Estás segura de que deseas eliminar todas tus entradas?");
  if (!confirm1) return;
  const confirm2 = confirm("Esta acción no se puede deshacer. Presiona OK si estás decidida.");
  if (confirm2) {
    localStorage.removeItem('ghostvEntries');
    displayEntries();
  }
}