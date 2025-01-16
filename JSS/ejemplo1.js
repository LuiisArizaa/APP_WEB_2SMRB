document.addEventListener("DOMContentLoaded", function() {
    // Selecciona el párrafo y agrega el evento click
    var parrafo = document.querySelector("p");
    parrafo.addEventListener("click", function() {
        alert("¡Hola Mundo!");
    });
});