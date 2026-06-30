
window.addEventListener("DOMContentLoaded", () => {

    const boton = document.querySelector(".menu-toggle");
    const menu = document.querySelector("nav");

    boton.addEventListener("click", () => {
        console.log("click funcionando");
        menu.classList.toggle("activo");
    });

})