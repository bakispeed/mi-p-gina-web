// Efecto suave al hacer clic en los enlaces del menú
document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const destino = document.querySelector(this.getAttribute("href"));
      destino.scrollIntoView({ behavior: "smooth" });
    });
  });
  
  // Validación básica del formulario
  document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Gracias por tu mensaje. Te responderé pronto.");
    this.reset();
  });