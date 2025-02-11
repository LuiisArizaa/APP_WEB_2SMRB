document.addEventListener("DOMContentLoaded", function(){

    function numeroDeCaracteres(string, caracter){

        let num1 = 0;
        for(let i = 0; string.lenght; i++){
            if(string[i] == caracter){
                num1++;
            }
        }

        return num1;
    }

    console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
    console.log(numeroDeCaracteres("MMMMM", "m")) // 0
    console.log(numeroDeCaracteres("eeee", e)) // 4
})