document.addEventListener("DOMContentLoaded", function () {
    // Selecciono los elementos del DOM que voy a utilizar
    const inputTarea = document.querySelector(".formulario__input");
    const botonAgregar = document.querySelector(".formulario__boton");
    const listaTareas = document.querySelector(".lista");
    const botonAleatorio = document.querySelector(".boton__aleatorio");
    let tareaSeleccionada = null; // Esta variable la creo porque guardará la tarea resaltada

    // Creo la Función para agregar tarea, esta funcion es la creada en el proyecto anterior
    function addTask() {
        const tareaTexto = inputTarea.value.trim();
        const numeroTarea = listaTareas.children.length + 1;

        if (tareaTexto !== " ") {
            // Crear un nuevo elemento de lista
            const nuevaTarea = document.createElement("li");
            nuevaTarea.textContent = "Nueva Tarea " + numeroTarea + ": " + tareaTexto;
            nuevaTarea.style.backgroundColor = " "; // Aquí me aseguro que no tengo el resaltado amarillo por defecto

            // Para crear botón de eliminar
            const botonEliminar = document.createElement("button");
            botonEliminar.textContent = "x";
            botonEliminar.classList.add("deleteBtn");

            // Creo el evento para eliminar tarea y llamarla ya que esta creada
            botonEliminar.addEventListener("click", function () {
                if (tareaSeleccionada === nuevaTarea) {
                    tareaSeleccionada = null; // Si la tarea eliminada estaba seleccionada, la deseleccionamos
                }
                listaTareas.removeChild(nuevaTarea);
            });

            // Agrego botón a la tarea y tarea a la lista
            nuevaTarea.appendChild(botonEliminar);
            listaTareas.appendChild(nuevaTarea);

            // Aquí limpio el campo de texto
            inputTarea.value = " ";
        }
    }

    // Creo el evento para agregar tarea al hacer clic en el boton
    botonAgregar.addEventListener("click", function (event) {
        event.preventDefault(); // Evita que se envie el formulario, es decir que la pagina no se recarge y se quedae en la parte from, sin esto no va funcionar.
        addTask();
    });

    // CReo la función que servira para seleccionar una tarea aleatoria
    function seleccionarTareaAleatoria() {
        if (listaTareas.children.length == 0) return; // Esto lo hago para si no hay tareas agregadas, salir, por eso pongo el return

        // Quitar color amarillo de la tarea previamente seleccionada
        if (tareaSeleccionada) {
            tareaSeleccionada.style.backgroundColor = " ";
        }

        // Esto sirve para seleccionar una nueva tarea aleatoria, utilizando la formula dada en clase
        const indiceAleatorio = Math.floor(Math.random() * listaTareas.children.length);
        tareaSeleccionada = listaTareas.children[indiceAleatorio];
        tareaSeleccionada.style.backgroundColor = "yellow"; // Esto es para resaltar la tarea seleccionada
    }

    // Creo el evento para seleccionar una tarea aleatoria al hacer clic en el botón, es decir llamando a la función
    botonAleatorio.addEventListener("click", function (event) {
        event.preventDefault(); // Como hice en la otra funcion, esto lo añado apara evitar que la página se recargue
        seleccionarTareaAleatoria();
    });
});
