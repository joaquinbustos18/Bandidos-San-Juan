let abrirMenuHamburguesa = document.getElementById("abrir-menu-hamburguesa");
let cerrarMenuHamburguesa = document.getElementById("cerrar-menu-hamburguesa");
let navMenu = document.getElementById("nav-menu");
let iconoBuscar = document.getElementById("icono-buscar");
let cerrarLupa = document.getElementById("cerrar-lupa");
let contenedorBuscar = document.querySelector(".contenedor-barra-de-busqueda");
let body = document.body;

// Abrir Menú Hamburguesa
abrirMenuHamburguesa.addEventListener("click", (e) => {
  e.stopPropagation(); // Evita que el click cierre inmediatamente el menú
  navMenu.classList.add("abrir");
  body.classList.add("no-scroll");
});

// Cerrar Menú Hamburguesa
cerrarMenuHamburguesa.addEventListener("click", () => {
  navMenu.classList.remove("abrir");
  body.classList.remove("no-scroll");
});

// Abrir Barra de Búsqueda
iconoBuscar.addEventListener("click", (e) => {
  e.stopPropagation(); // Evita que el click cierre inmediatamente la barra
  contenedorBuscar.classList.add("abrir");
});

// Cerrar Barra de Búsqueda
cerrarLupa.addEventListener("click", () => {
  contenedorBuscar.classList.remove("abrir");
});

// Cerrar Menú y Barra al Hacer Click Fuera
document.addEventListener("click", (event) => {
  let clickDentroMenu =
    navMenu.contains(event.target) ||
    abrirMenuHamburguesa.contains(event.target);
  let clickDentroBusqueda =
    contenedorBuscar.contains(event.target) ||
    iconoBuscar.contains(event.target);

  if (!clickDentroMenu) {
    navMenu.classList.remove("abrir");
    body.classList.remove("no-scroll");
  }

  if (!clickDentroBusqueda) {
    contenedorBuscar.classList.remove("abrir");
  }
});
