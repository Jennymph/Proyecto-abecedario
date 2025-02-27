function obtenerColorAleatorio() {
  const colores = ["green", "blue", "red"];
  return colores[Math.floor(Math.random() * colores.length)];
}

const elementosH5 = document.querySelectorAll("h5");

elementosH5.forEach((h5) => {
  h5.addEventListener("click", function () {
    // Cambia el color del texto al hacer clic
    this.style.color = obtenerColorAleatorio();
  });
});
