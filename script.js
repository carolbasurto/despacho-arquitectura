
const boton = document.querySelector(".menu-toggle");
const menu = document.querySelector("nav");

boton.addEventListener("click", () => {
    menu.classList.toggle("activo");
});