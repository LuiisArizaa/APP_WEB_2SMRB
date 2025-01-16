document.addEventListener("DOMContentLoaded", function(){

    /*Definicón de la función*/
    function esPrimo(a){

        for(let i = 2; i < a; i++){
            if(a % i == 0){
                return false;
            }
        }

        return true;
    }

    /*Parte principal del códgio (main)*/
    const num_1 = parseFloat(promt("Introduce un numero entero"));
    const num_1 = parseFloat(promt("Introduce otro numero entero"));

    let min, max;
    let lst = []

    if(num_1 >= num_2){
        max = num_1;
        min = num_2;
    }else{
        max = num_2;
        min = num_1;
    }

    for (let i = min; i <= max; i++){
        if(esPrimo(i)){
            lst.push(i);

        }
    }

    console.log(lst);

});