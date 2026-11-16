
// Mobile navigation
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("nav");

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("open");

  const isOpen = navigation.classList.contains("open");

  menuButton.textContent = isOpen ? "×" : "☰";
  menuButton.setAttribute("aria-expanded", isOpen);
});

// Close navigation after clicking a link
navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton.textContent = "☰";
    menuButton.setAttribute("aria-expanded", "false");
  });
});

// Automatically update copyright year
document.querySelector("#year").textContent =
  new Date().getFullYear();
