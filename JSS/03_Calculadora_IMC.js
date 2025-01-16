document.addEventListener("DOMContentLoaded", function(){

    const peso_kilo = parseFloat(prompt("Inserta su peso en Kilogramos"));
    const altura_metros = parseFloat(prompt("Inserta su altura en metros"));
    const calculo_IMC = peso_kilo/Math.pow(altura_metros, 2);
    let clasificacion;

    if (imc > 18.5) {
        clasificacion="Bajo peso";
    }else if(imc >= 18.5 && imc <= 24.9){
        clasificacion = "Peso normal";
    }else if(imc >= 25 && imc < 30){
        clasificacion = "Sobrepeso";
    }else{
        clasifiación = "Obesidad"
    }


    alert("IMC: " + imc.toFixed(2) + ". Clasificación: " + clasificacion);



});