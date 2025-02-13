document.addEventListener("DOMContentLoaded", function(){

    // Creo la función que genera un color hexadecimal aleatorio
    function getRandomHexColor() {
        let hex = "#"; // Como un color hexadecimal siempre comienza con "#", lo añado guardandola en una variable
        const hexValues = "0123456789ABCDEF"; // Guardo en una variable los caracteres válidos en un código hexadecimal

        // Genero un código de 6 caracteres aleatorios para formar el color con un bucle for
        for (let i = 0; i < 6; i++) {
            hex += hexValues[Math.floor(Math.random() * 16)]; // Como en el javascript simple, utilizo esto para que seleccione un valor aleatorio y lo añada a la cadena
        }

        return hex; // Esto devuelve el color generado
    }

    // Seleccio los elementos del DOM que vamoy a modificar, añadiendole clases del css.
    const button = document.querySelector(".btn"); // Esto es el botón que cambia el color
    const colorText = document.querySelector(".color-highlight"); // Este es la clase que tiene el texto donde se muestra el color actual
    const main = document.querySelector(".main"); // Y esto es para el fondo de la aplicación

    // Creo el evento para llamar a la función creada antes, que esto se ejecuta cuando el usuario hace clic en el botón
    button.addEventListener("click", function () {
        const newColor = getRandomHexColor(); // Genero un nuevo color hexadecimal aleatorio, llamando a la funcion creada y guardandola en una variable

        // Cambio el color de fondo y actualizamos el texto con el nuevo color, utilizando la varible que contiene la funcion
        main.style.backgroundColor = newColor;
        colorText.textContent = newColor; // Muestro el código hexadecimal del color seleccionado
    });
});
