document.addEventListener("DOMContentLoaded", function(){
    
    //Guardo en una variable el siguiente array que voy a utilizar de ejemplo para el ejercicio
    const frasesFrikisInformatica = [
        "Los programadores no tienen errores, solo experiencias inesperadas.",
        "La programación es como montar en bicicleta: una vez que lo aprendes, nunca lo olvidas.",
        "En la informática, el único límite es la imaginación (y la memoria RAM).",
        "Los programadores no duermen, solo hacen pausas de ejecución.",
        "La mejor forma de resolver un problema es dividirlo en problemas más pequeños.",
        "Programar es como cocinar: a veces, una pizca de creatividad hace la diferencia.",
        "En la programación, cada punto y coma cuenta.",
        "El código es como el vino: mejora con el tiempo (y las revisiones).",
        "La resolución de problemas es la habilidad más importante en la programación.",
        "La informática es como una montaña rusa: emocionante y llena de giros inesperados."
    ];
    
    //Selecciono las clases que voy a utilizar
    const titulo = document.querySelector(".titulo");
    const boton = document.querySelector(".boton");
    
    //Creo la funcion de aleatorio
    function generarFraseAleatoria() {
        const indiceAleatorio = Math.floor(Math.random() * frasesFrikisInformatica.length);
        titulo.textContent = frasesFrikisInformatica[indiceAleatorio];
    }
    
    boton.addEventListener("click", () => {
        if (boton.textContent == "Empezar") {
            generarFraseAleatoria();
            boton.textContent = "Ver más contenido";
        } else {
            generarFraseAleatoria(); //Esto hace que cambia de frase cada vez que le haga click en ver mas contenido
        }
    });

});
