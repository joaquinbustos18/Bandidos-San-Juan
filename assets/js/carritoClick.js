const carritoIcono = document.getElementById("carritoIcono");
const carrito = document.querySelector(".carrito");
const x = document.getElementById("x");

carritoIcono.addEventListener("click", () => {
  carrito.style.display = "block";
});

x.addEventListener("click", () => {
  carrito.style.display = "none";
});

const botonRestar = document.querySelectorAll(".botonRestar");
const cantidadCarrito = document.querySelectorAll(".cantidadCarrito");
const botonSumar = document.querySelectorAll(".botonSumar");

botonSumar.forEach((boton, index) => {
  boton.addEventListener("click", () => {
    let cantidadTotal = parseInt(cantidadCarrito[index].innerHTML) || 0;
    cantidadTotal++;
    cantidadCarrito[index].innerHTML = cantidadTotal;
  });
});

botonRestar.forEach((boton, index) => {
  boton.addEventListener("click", () => {
    let cantidadTotal = parseInt(cantidadCarrito[index].innerHTML) || 0;
    if (cantidadTotal > 0) cantidadTotal--;
    cantidadCarrito[index].innerHTML = cantidadTotal;
  });
});

const basuraIconos = document.querySelectorAll(".basuraIcono");

basuraIconos.forEach((basuraIcono) => {
  basuraIcono.addEventListener("click", () => {
    // Elimina el producto específico (el contenedor del producto que contiene el ícono de basura)
    const productoDiv = basuraIcono.closest(".productoDiv");
    productoDiv.style.display = "none";
  });
});
