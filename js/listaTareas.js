let Tareas = ["Tarea 1", "Tarea 2", "Tarea 3"];

let ListaTareas = document.getElementById("listaTareas");
ListarTareas(Tareas);

function ListarTareas(T) {

    ListaTareas.innerHTML = "";
    T.forEach((tarea) => {
        
        li = document.createElement("li");
        li.textContent = tarea;
        ListaTareas.appendChild(li);
        li.className = "list-group-item";
    });
}



let btnAgregar = document.getElementById("btnAgregar");
btnAgregar.addEventListener("click", agregarTarea);

function agregarTarea() {

    let tarea = document.getElementById("tarea").value;
    Tareas.push(tarea);
    ListarTareas(Tareas);
}


let btnBuscar = document.getElementById("btnBuscar");
btnBuscar.addEventListener("click", buscarTareas);

function buscarTareas() {
    let tareaBuscada = document.getElementById("tarea").value;
    if (tareaBuscada == "") {
        ListarTareas(tareas);
    }
    else {
        tareasEncontradas = Tareas.filter((Tarea) => Tarea == tareaBuscada);

        if (tareasEncontradas.length > 0) {
            ListarTareas(tareasEncontradas);
        }
        else {
            Swal.fire({
                icon: "error",
                title: "Oops... xd :D jaja!",
                text: "No se encontraron tareas!",
                footer: "",
            });
        }
    }
}





let modalEditar = new bootstrap.Modal(document.getElementById("modalEditar"));
let btnEditar = document.getElementById("btnEditar");
btnEditar.addEventListener("click", buscarTareaEditar);

function buscarTareaEditar() {
    let tarea_buscada = document.getElementById("tarea").value;
    i = Tareas.findIndex((Tarea) => Tarea == tarea_buscada);
    if (i == -1) {

        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No se encontró tarea para editar, ingrese una existente!",
            footer: "",
        });
    }
    else {
        let tituloModal = document.getElementById("modalEditarLabel");
        tituloModal.textContent = "Editando " + Tareas[i];
        modalEditar.show();
    }
}

let btnGuardar = document.getElementById("btnGuardar");
btnGuardar.addEventListener("click", guardarTarea);

function guardarTarea() {

    let tarea_nueva = document.getElementById("tarea_nueva").value;
    modalEditar.hide();
    Tareas[i] = tarea_nueva;
    ListarTareas(Tareas);
}


let modalEliminar = new bootstrap.Modal(
    document.getElementById("modalEliminar")
);
let btnEliminar = document.getElementById("btnEliminar");
btnEliminar.addEventListener("click", eliminarTarea);

function eliminarTarea() {
    let tarea_buscada = document.getElementById("tarea").value;
    i = Tareas.findIndex((Tarea) => Tarea == tarea_buscada);
    if (i == -1) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No se encontró tarea para eliminar, ingrese una existente!",
            footer: "",
        });
    }
    else {
        let tituloModal = document.getElementById("modalEliminarLabel");
        tituloModal.textContent = "Eliminando " + Tareas [i];
        modalEliminar.show();
    }
}

let btnDelete = document.getElementById("btnDelete");
btnDelete.addEventListener("click", deleteTarea);

function deleteTarea() {
    modalEliminar.hide();
    Tareas = Tareas.filter(t=>t!=Tareas[i]);
    ListarTareas(Tareas);
}