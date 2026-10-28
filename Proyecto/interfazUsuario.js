const prompt = require('prompt-sync')();

const {
    crearEjercicio, 
    crearPlan,
    agregarEjercicio,
    eliminarEjercicio,
    listarEjercicios,
    filtrarEjercicios,
    calcularDuracionTotal,
    actualizarEjercicio,
    buscarEjercicioRecursivo,
    multiplicarDuracionesEjercicios,
    ordenarEjercicios
} = require('./datos.js');

do{
   console.log("--- Menú Principal ---");
   console.log("1. Crear un nuevo plan");
   console.log("2. Gestionar un plan existente");
   var elegir = Number(prompt("3. Salir \n"));

   switch(elegir){
    case 1: 
        var nombrePlan = prompt("Dime el nombre del plan: ");
        var plan = crearPlan(nombrePlan);
        console.log("Plan creado");
        console.log(plan);
    break;

    case 2:

        break;


    default: console.log("Opción no válida.") 
   }


}
while(elegir != 3);
