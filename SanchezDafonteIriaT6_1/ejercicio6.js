let tareas = document.querySelectorAll('#tareas li')
let cont = document.getElementById('pendientes');
let pendientes = document.querySelectorAll('#tareas li:not(.hecha)');
cont.textContent = "Quedan " + pendientes.length +  " tareas";

tareas.forEach((tarea) =>{
    tarea.addEventListener('click', () =>{
        tarea.classList.toggle('hecha');
        let pendientes = document.querySelectorAll('#tareas li:not(.hecha)');
        if(pendientes.length > 1){
            cont.textContent = "Quedan " + pendientes.length + " tareas"
           ;
        }
        else if(pendientes.length == 1){
            cont.textContent = "Queda 1 tarea";
        }
       
       else {  cont.textContent = "No quedan tareas";};
    })
})

