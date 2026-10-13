const prompt = require('prompt-sync')();
var array = [];

do {
    console.log("1. Agregar tarea");
    console.log("2. Eliminar tarea");
    console.log("3. Marcar tarea como completada");
    console.log("4. Mostrar solo las tareas completadas");
    console.log("5. Salir del programa");
    var accion = (Number)(prompt("Elige una opción (1-5): "));



    switch (accion) {
        case 1:
            flag = true;
            var tit = prompt("Ingrese el título de la tarea: ");
            var desc = prompt("Ingrese la descripción de la tarea: ");
            if (tit == "" || desc == "") {
                array2 = ["error", "error", false];
                array.push(array2);
            }
            else {
                for (let i = 0; i < array.length; i++) {


                    if (array[i][0] == tit) {
                        console.log("Error. Título duplicado");
                        flag = false;
                        break;
                    }


                }
                if (flag) {
                    var array2 = [tit, desc, false];
                    array.push(array2);
                }
            }
            break;

        case 2:
            if (array.length < 1) {
                console.log("No hay tareas para eliminar");
            }

            else {
                for (let i = 0; i < array.length; i++) {
                    console.log(" " + (i + 1) + " " + array[i][0] + " " + array[i][2])

                }
                var del = (Number)(prompt("Que tarea quieres eliminar: "));

                if (del < 1 || del > array.length) {
                    console.log("Error de rango");
                    break;
                }
                else {
                    console.log("Tarea " + array[del - 1][0] + " eliminada");
                    array.splice(del - 1, 1);
                }
            }
            break;

        case 3:

            if (array.length < 1) {
                console.log("No hay tareas para marcar como completadas");
            }
            else {
                for (let i = 0; i < array.length; i++) {
                    console.log(" " + (i + 1) + " " + array[i][0] + " " + array[i][2])

                }

                var completar = (Number)(prompt("Que tarea quieres marcar como completada: "));
                if (completar < 1 || completar > array.length) {
                    console.log("Tarea inexistente");
                    break;
                }

                if (array[completar - 1][2] == true) {
                    console.log("Tarea " + array[completar][0] + " ya completada");
                    break;
                }
                else array[completar - 1][2] = true;
            }
            break;


        case 4:
            var comps = 0;
            for (let i = 0; i < array.length; i++) {
                if (array[i][2] == true) {
                    console.log(array[i]);
                    comps++;
                }
            }
            if (comps == 0) {
                console.log("No existen tareas completadas");
            }


            break;

        case 5:
            console.log("Hasta pronto");
            break;

        default:
            console.log("error");
    }
}
while (accion != 5);