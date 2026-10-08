const backToTop = document.getElementById("return-to-top");

function updateBackToTopVisibility() {
  if (!backToTop) return;
  backToTop.classList.toggle("is-visible", window.scrollY > 120);
}

window.addEventListener("scroll", updateBackToTopVisibility, { passive: true });
updateBackToTopVisibility();
