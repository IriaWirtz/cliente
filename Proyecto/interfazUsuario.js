const prompt = require('prompt-sync')();

const {
    crearEjercicio,
    crearPlan,
    agregarEjercicio,
    eliminarEjercicio,
    listarEjercicios,
    filtrarEjercicios,
    actualizarEjercicio,
    buscarEjercicioRecursivo,
    ordenarEjercicios
} = require('./datos.js');

const {
    calcularDuracionTotal,
    multiplicarDuracionesEjercicios,
    estadisticasPlan
} = require('./estadisticas.js')

function menu() {

    const Planes = new Map();
    do {
        console.log("--- Menú Principal ---");
        console.log("1. Crear un nuevo plan");
        console.log("2. Gestionar un plan existente");
        var elegir = Number(prompt("3. Salir \n"));

        switch (elegir) {
            case 1:
                var nombrePlan = prompt("Dime el nombre del plan: ");
                var plan = crearPlan(nombrePlan);
                console.log("Plan creado");
                Planes.set(nombrePlan, plan);
                break;

            case 2:
                if (Planes.size == 0) {
                    console.log("No hay planes disponibles.");
                }

                else {
                    var cont = 1;
                    console.log("Planes disponibles:");
                    for (var [nombre, plan] of Planes) {
                        console.log(cont + "." + nombre);
                        cont++;
                    }
                    var num = prompt("Dame el número del plan que quieras gestionar: ");

                    if (num > Planes.size + 1 || num < 1) {
                        console.log("Plan no válido.");
                        break;
                    }

                    else {
                        for (var [nombre, plan] of Planes) {
                            var cont = 1;
                            if (num == cont) {
                                var elegir;
                                do {
                                    console.log("--- Gestionando: " + plan.nombre + " ---");
                                    console.log("1. Agregar ejercicio");
                                    console.log("2. Eliminar ejercicio");
                                    console.log("3. Listar ejercicios");
                                    console.log("4. Filtrar ejercicios por intensidad");
                                    console.log("5. Actualizar ejercicio");
                                    console.log("6. Calcular duración total del plan");
                                    console.log("7. Buscar ejercicio recursivamente");
                                    console.log("8. Multiplicar duraciones de ejercicios");
                                    console.log("9. Ordenar ejercicios");
                                    console.log("10. Buscar ejercicios por nombre parcial");
                                    console.log("11. Ver estadísticas del plan");
                                    console.log("12. Combinar con otro plan");
                                    console.log("13. Volver al menú principal")
                                    elegir = Number(prompt());


                                    switch (elegir) {
                                        case 1:
                                            var nombreEjer = prompt("Dame el nombre del ejercicio: ");
                                            var duracionEjer = Number(prompt("Dame la duración del ejercicio: "));
                                            var intensidadEjer = Number(prompt("Dame la intensidad del ejercicio: "));

                                            var nuevoEjer = crearEjercicio(nombreEjer, duracionEjer, intensidadEjer);

                                            if (crearEjercicio == null) {
                                                console.log("Datos no válidos.");
                                            }

                                            else {
                                                agregarEjercicio(plan, nuevoEjer);
                                                console.log("Ejercicio agregado.");
                                            }
                                            break;

                                        case 2:

                                            var flag= true;
                                            var nombreEjer = prompt("Dame el nombre del ejercicio: ");

                                            for (var ejer of Planes.get(plan.nombre).ejers) {
                                                if (ejer.nombre == nombreEjer) {
                                                    var copia = eliminarEjercicio(plan, nombreEjer);
                                                    Planes.set(plan.nombre, copia);
                                                    console.log("Ejercicio eliminado.");
                                                    flag = false;
                                                    break;

                                                }



                                            }

                                            if(flag){console.log("No existe ningún ejercicio con ese nombre.")};



                                            break;

                                        case 3:
                                            listarEjercicios(Planes.get(plan.nombre));
                                            break;

                                        case 4:
                                            break;

                                        case 5:
                                            break;
                                        case 6:
                                            break;
                                        case 7:
                                            break;

                                        case 8:
                                            break;

                                        case 9:
                                            break;

                                        case 10:
                                            break;

                                        case 11:
                                            break;

                                        case 12:
                                            break;

                                        case 13:
                                            break;

                                        default: console.log("Opción no válida.");

                                    }
                                }
                                while (elegir != 13);

                                break;
                            }
                            else cont++;
                        }


                    }
                    break;
                }





            case 3: console.log("¡Hasta pronto!");
                break;
            default: console.log("Opción no válida.")
        }


    }
    while (elegir != 3);
}

module.exports = {
    menu
}
