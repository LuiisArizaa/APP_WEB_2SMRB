document.addEventListener("DOMContentLoaded", function(){

    const input = document.querySelector(".formulario__input");
    const boton = document.querySelector(".formulario__boton");
    const lista = document.querySelector(".lista");

    // Funcion para agregar las tareas
    function addTask() {
        const tareaTexto = input.value.trim();

        if (tareaTexto !== "") {
            const nuevaTarea = document.createElement("li");
            nuevaTarea.textContent = tareaTexto;

            const botonEliminar = document.createElement("button");
            botonEliminar.textContent = "x";
            botonEliminar.classList.add("delete-Btn");

            botonEliminar.addEventListener("click", function() {
                lista.removeChild(nuevaTarea);
            });

            nuevaTarea.appendChild(botonEliminar);
            lista.appendChild(nuevaTarea);

            input.value = "";
        }
    }

    boton.addEventListener("click", function(event){
        event.preventDefault();
        addTask();
    });


});