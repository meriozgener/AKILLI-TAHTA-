window.addEventListener("DOMContentLoaded", () => {
  const cat = document.getElementById("cat");

  // El sallama benzeri animasyon için döndürme (simülasyon)
  setTimeout(() => {
    cat.style.transform = "rotate(10deg)";
  }, 3500);

  setTimeout(() => {
    cat.style.transform = "rotate(-10deg)";
  }, 4000);

  setTimeout(() => {
    cat.style.transform = "rotate(0deg)";
  }, 4500);

  // Göz kırpma için opacity simülasyonu
  setTimeout(() => {
    cat.style.filter = "brightness(0.8)";
  }, 9000);

  setTimeout(() => {
    cat.style.filter = "brightness(1)";
  }, 9300);
});