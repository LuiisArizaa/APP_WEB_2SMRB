document.addEventListener("DOMContentLoaded", function() {
    const caja = document.getElementById("caja");
    const boton = document.getElementById("toggleButton");

    function toggleBox() {
        if (caja.style.display == "none") {
            caja.style.display = "block";
            boton.textContent = "Ocultar Caja";
        } else {
            caja.style.display = "none";
            boton.textContent = "Mostrar Caja";
        }
    }


    boton.addEventListener("click", toggleBox);
});
