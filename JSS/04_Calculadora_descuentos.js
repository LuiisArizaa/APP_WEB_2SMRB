document.addEventListener("DOMContentLoaded", function(){


    /*Definicion de funciones*/
    function PrecioDescuento(a, b){

        return a*(1-b/100);

    }

    /*Parte principal del código (main) -- Llamada a la función */
    const precio_usuario = parseFloat(promt("Introduce el precio original del producto"));
    const descuento_usuario = parseFloat(promt("Introduce el descuento a aplicar en el produc"));
    alert("El precio final del producto después de aplicar un descuento del" + descuento_usuario + "% es: " + PrecioDescuento(precio_usuario, descuento_usuario) + "euros.")


})