function crearEjercicio(nombre, duracion, intensidad ){
    if(Number.isInteger(nombre) || !(duracion  <= 0 || duracion >= 0 ) || !(intensidad <= 10 && intensidad >= 0) ){
   return null;
}
else {const ejer = {
        nombre:nombre,
        duracion:duracion,
        intensidad:intensidad
    }
    return ejer;
}

}

function crearPlan(nombre){
    const plan ={
        nombre:nombre,
        ejer:[]
    };

    return plan;
}

function agregarEjercicio(plan, ejercicio){
    const copia = {...plan};
    copia.ejer.push(ejercicio);
    return copia;
}

function eliminarEjercicio(plan, ejercicio){
    const copia = {...plan};
    for (let i = 0; i < plan.length; i++) {
       if(copia.ejer[i] == ejercicio){
        copia.ejer[i].splice(i, 1);
       }
        
    }
  
 
    return copia;
    }



var ejer = crearEjercicio("Dominadas", 1, 1);
var ejer2 = crearEjercicio("Sentadillas", 5, 7);
var plan = crearPlan("Primer plan");
var prueba = agregarEjercicio(plan, ejer);
var eliminar = eliminarEjercicio(plan, ejer)

console.log(prueba);
