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
    ordenarEjercicios,
    buscarEjerciciosPorNombre,
    combinarPlanes
} = require('./datos.js');

const {
    calcularDuracionTotal,
    multiplicarDuracionesEjercicios,
    estadisticasPlan
} = require('./estadisticas.js');

const {
    mostrarEjercicio
} = require('./funcionesUtiles.js');

function menu() {

    const Planes = new Map();
    do {
        console.log("--- Menú Principal ---");
        console.log("1. Crear un nuevo plan");
        console.log("2. Gestionar un plan existente");
        console.log("3. Salir")
        var elegir = Number(prompt());

        switch (elegir) {
            case 1:
                var nombrePlan = prompt("Dime el nombre del plan: ");
                var plan = crearPlan(nombrePlan);
                console.log("Plan creado.");
                Planes.set(nombrePlan, plan);
                break;

            case 2:
                if (Planes.size == 0) {
                    console.log("No hay planes disponibles.");
                    break;
                }

                else {
                    var cont = 1;
                    console.log("Planes disponibles:");
                    for (var [nombre, plan] of Planes) {
                        console.log(cont + ". " + nombre);
                        cont++;
                    }
                    var num = Number(prompt("Dame el número del plan que quieras gestionar: "));

                    if (num > Planes.size || num < 1 || !Number.isInteger(num)) {
                        console.log("Plan no válido.");
                        break;
                    }

                    else {
                        var cont = 1;
                        for (var [nombre, plan] of Planes) {
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

                                            if (nuevoEjer == null) {
                                                console.log("Datos no válidos.");
                                            }

                                            else {
                                                plan = agregarEjercicio(plan, nuevoEjer);
                                                Planes.set(plan.nombre, plan);
                                                console.log("Ejercicio agregado.");
                                            }
                                            break;

                                        case 2:

                                            var flag = true;
                                            var nombreEjer = prompt("Dame el nombre del ejercicio: ");

                                            for (var ejer of Planes.get(plan.nombre).ejercicios) {
                                                if (ejer.nombre == nombreEjer) {
                                                    const copia = eliminarEjercicio(Planes.get(plan.nombre), nombreEjer);
                                                    Planes.set(plan.nombre, copia);
                                                    plan = copia;
                                                    console.log("Ejercicio eliminado.");
                                                    flag = false;
                                                    break;

                                                }



                                            }

                                            if (flag) { console.log("No existe ningún ejercicio con ese nombre.") };



                                            break;

                                        case 3:
                                            listarEjercicios(Planes.get(plan.nombre));
                                            break;

                                        case 4:
                                            var intensidadMax = Number(prompt("Dame la intensidad máxima para empezar el filtrado: "));

                                            var res = filtrarEjercicios(Planes.get(plan.nombre), intensidadMax);

                                            if (res.length < 1) {
                                                console.log("Ningún ejercicio cumple el filtro.");
                                            }
                                            else res.forEach(mostrarEjercicio);
                                            break;


                                        case 5:
                                            var flag = true;
                                            var nombreEjer = prompt("Dame el nombre del ejercicio: ");

                                            for (var ejer of Planes.get(plan.nombre).ejercicios) {
                                                if (ejer.nombre == nombreEjer) {
                                                    flag = false;
                                                    var nuevaDuracion = Number(prompt("Dame la duración actualizada: "));
                                                    var textoIntensidad = prompt("Dame la intensidad actualizada: ");


                                                    var nuevaIntensidad = ejer.intensidad;
                                                    if (textoIntensidad.trim() != "") {
                                                        nuevaIntensidad = Number(textoIntensidad);
                                                    }

                                                    if (!(nuevaDuracion > 0) || !Number.isInteger(nuevaIntensidad) || nuevaIntensidad < 1 || nuevaIntensidad > 10) {
                                                        console.log("Datos no válidos.");
                                                    }
                                                    else {
                                                        const copia = actualizarEjercicio(Planes.get(plan.nombre), nombreEjer, nuevaDuracion, nuevaIntensidad);
                                                        Planes.set(plan.nombre, copia);
                                                        plan = copia;
                                                        console.log("Ejercicio actualizado.");
                                                    }
                                                    break;
                                                }
                                            }

                                            if (flag) {
                                                console.log("No existe ningún ejercicio con ese nombre.");
                                            }
                                            break;

                                        case 6:
                                            var copia = calcularDuracionTotal(plan);
                                            console.log("Duración total: " + copia + " minutos");

                                            break;
                                        case 7:
                                            var nombreEjer = prompt("Dame el nombre del ejercicio: ");
                                            var copia = buscarEjercicioRecursivo(plan, nombreEjer);
                                            if (copia == null) {
                                                console.log("Ejercicio no encontrado.")
                                            }
                                            else mostrarEjercicio(copia);
                                            break;

                                        case 8:
                                            const duraciones = plan.ejercicios.map((ej) => ej.duracion);
                                            var copia = multiplicarDuracionesEjercicios(...duraciones);
                                            console.log("Producto de las duraciones: " + copia);

                                            break;

                                        case 9:
                                            var criterio = prompt("Inserta el criterio por el que comparar: ");
                                            if (criterio == "nombre" || criterio == "duracion" || criterio == "intensidad") {
                                                plan = ordenarEjercicios(plan, criterio);
                                                Planes.set(plan.nombre, plan);
                                                console.log("Ejercicios ordenados.");
                                            }
                                            else console.log("Criterio no válido.");
                                            break;

                                        case 10:
                                            const busqueda = prompt("Inserta el texto a buscar: ");
                                            var copia = buscarEjerciciosPorNombre(plan, busqueda);
                                            if (copia.length == 0) {
                                                console.log("No se han encontrado ejercicios.")
                                            }
                                            else copia.forEach(mostrarEjercicio);


                                            break;

                                        case 11:
                                            var copia = estadisticasPlan(plan);
                                            console.log("Duración promedio: " + copia.duracionPromedio + " minutos");
                                            console.log("Intensidad promedio: " + copia.intensidadPromedio);
                                            console.log("Total de ejercicios: " + copia.totalEjercicios);
                                            break;

                                        case 12:
                                            var cont12 = 1;
                                            if (Planes.size == 1) {
                                                console.log("No hay otros planes para combinar.");
                                                break;
                                            }
                                            console.log("Planes disponibles:");
                                            for (var [nom, plan2] of Planes) {
                                                if (plan.nombre == nom) {
                                                    continue;
                                                }
                                                console.log(cont12 + ". " + nom);
                                                cont12++;
                                            }
                                            var elegC12 = Number(prompt("Dame el numero del plan que quieres combinar: "));
                                            if (!Number.isInteger(elegC12) || elegC12 > cont12 - 1 || elegC12 < 1) {
                                                console.log("Plan no válido.");
                                                break;
                                            }
                                            var cont2 = 1;
                                            for (var [nomPlan, planActual] of Planes) {
                                                if (plan.nombre == nomPlan) {
                                                    continue;
                                                }
                                                if (elegC12 == cont2) {
                                                    const combinado = combinarPlanes(plan, planActual);
                                                    Planes.set(combinado.nombre, combinado);
                                                    console.log("Plan combinado creado: " + combinado.nombre);
                                                    break;
                                                }
                                                cont2++;
                                            }
                                            break;

                                        case 13:
                                            break;

                                        default: console.log("Opción no válida.");

                                    }
                                }
                                while (elegir != 13);

                                break;
                            }
                            cont++;
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
