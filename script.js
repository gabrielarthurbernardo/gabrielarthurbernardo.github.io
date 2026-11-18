const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("nav");

function setMenuState(isOpen) {
  navigation.classList.toggle("open", isOpen);
  menuButton.textContent = isOpen ? "×" : "☰";
  menuButton.setAttribute("aria-expanded", String(isOpen));
}

menuButton.addEventListener("click", () => {
  setMenuState(!navigation.classList.contains("open"));
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenuState(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenuState(false);
});

document.querySelector("#year").textContent = new Date().getFullYear();
