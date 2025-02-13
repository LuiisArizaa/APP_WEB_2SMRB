document.addEventListener("DOMContentLoaded", function(){

    // Lista de colores predefinidos
    const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "brown"];

    // Seleccionamos los elementos del DOM
    const button = document.querySelector(".btn"); // Botón que cambia el color
    const colorText = document.querySelector(".color-highlight"); // Texto que muestra el color actual
    const main = document.querySelector(".main"); // Elemento cuyo fondo cambiará

    // Evento que se ejecuta al hacer clic en el botón
    button.addEventListener("click", function () {
        // Generamos un número aleatorio para elegir un color de la lista
        const randomIndex = Math.floor(Math.random() * colors.length);
        const newColor = colors[randomIndex]; // Seleccionamos un color aleatorio de la lista

        // Aplicamos el nuevo color de fondo al contenedor principal
        main.style.backgroundColor = newColor;

        // Actualizamos el texto para que muestre el nuevo color
        colorText.textContent = newColor;
    });

});