// Load icons
lucide.createIcons();

// Open external project links
function openLink(url) {
  window.open(url, "_blank");
}

// Scroll to contact section when "Contact Me" button is clicked
document.getElementById("contactBtn").addEventListener("click", () => {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});

// Auto-update footer year
document.getElementById("year").textContent = new Date().getFullYear();
