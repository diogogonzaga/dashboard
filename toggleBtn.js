const toggleBtn = document.getElementById("darkToggle");
const content = document.getElementById("content");
const body = document.getElementById("body");

// Atualiza ícone do botão
function updateButton() {
  if (content.classList.contains("dark")) {
    toggleBtn.textContent = "☀️";
    toggleBtn.style.backgroundColor = "#DDE6ED"
  } else {
    toggleBtn.textContent = "🌙";
   toggleBtn.style.backgroundColor = "#313647"
  }
}

// Aplica preferência guardada
if (localStorage.getItem("theme") === "dark") {
}
updateButton();

// Toggle dark mode no container
toggleBtn.addEventListener("click", () => {
  content.classList.toggle("dark");
body.classList.toggle("dark");

  localStorage.setItem(
    "theme",
    content.classList.contains("dark") ? "dark" : "light"
  );
  // Animação leve do botão
  toggleBtn.classList.add("scale-110");
  setTimeout(() => toggleBtn.classList.remove("scale-110"), 150);

  updateButton();
});
