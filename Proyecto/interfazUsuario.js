const prompt = require('prompt-sync')();

do{
    var elegir = prompt("---Menú Principal---" + '\n'
        + "1. Crear un nuevo plan"  + '\n'
        + "2. Gestionar un plan existente" + '\n'
        + "3. Salir" + '\n'
    );

   switch(elegir){
    case 1: 
        var nombrePlan = prompt("Dime el nombre del plan");
        var plan = crearPlan(nombrePlan);
        console.log("Plan creado");
        console.log(plan);
    break;

    case 2:
        break;


    default: console.log("¡Hasta pronto!") 
   }


}
while(elegir != 3);
