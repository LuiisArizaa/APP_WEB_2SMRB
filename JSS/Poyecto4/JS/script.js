document.addEventListener("DOMContentLoaded", function() {
    // Seleccionar elementos del DOM
    const inputTarea = document.querySelector(".formulario__input");
    const botonAgregar = document.querySelector(".formulario__boton");
    const listaTareas = document.querySelector(".lista");

    // Creo la Función para agregar tarea
    function addTask() {
        const tareaTexto = inputTarea.value.trim(); // Obtener el valor del input y eliminar espacios extra
        const numeroTarea = listaTareas.children.length + 1;

        if (tareaTexto !== " ") {
           
            // Crear un nuevo elemento de lista
            const nuevaTarea = document.createElement("li");
            nuevaTarea.textContent = "Nueva Tarea " + numeroTarea + ": " + tareaTexto;

            // Crear botón de eliminar
            const botonEliminar = document.createElement("button");
            botonEliminar.textContent = "x";
            botonEliminar.classList.add("deleteBtn");
            
            // Evento para eliminar tarea
            botonEliminar.addEventListener("click", function() {
                listaTareas.removeChild(nuevaTarea);
            });

            // Agregar botón a la tarea y tarea a la lista
            nuevaTarea.appendChild(botonEliminar);
            listaTareas.appendChild(nuevaTarea);

            // Limpiar el campo de texto
            inputTarea.value = " ";
        }
    }

    // Evento para agregar tarea cuando se haga clic en el botón
    botonAgregar.addEventListener("click", function(event) {
        event.preventDefault();   //Esto lo pongo para que se quede en el fron y cuando le doy a agregar tarea no se recarge y pueda seguir añadiendose tareas
        addTask();
    });

});