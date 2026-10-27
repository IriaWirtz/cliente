function crearEjercicio(nombre, duracion, intensidad ){
    if(Number.isInteger(nombre) || !(duracion  <= 0 || duracion >= 0 ) || !(intensidad <= 10 && intensidad >= 0) ){
   return null;
}
else {const ejers = {
        nombre:nombre,
        duracion:duracion,
        intensidad:intensidad
    }
    return ejers;
}

}

function crearPlan(nombre){
    const plan ={
        nombre:nombre,
        ejers:[]
    };

    return plan;
}

function agregarEjercicio(plan, ejercicio){
    const copia = {...plan};
    copia.ejers.push(ejercicio);
    return copia;
}

function eliminarEjercicio(plan, ejercicio){
       const copia = plan.ejers.filter((ejer) => ejer.nombre != ejercicio.nombre);


  
 
    return copia;
    }

function listarEjercicios(plan){
    if(plan.ejers.length == 0){
        console.log("El plan no tiene ejercicios");
    }

    else for(const ej of plan.ejers){
        console.log(`${ej.nombre}: ${ej.duracion} minutos`);
    }
} 

function filtrarEjercicios(plan, intensidad){
    const copia = plan.ejers.filter((valor) => valor.intensidad <= intensidad);

    return copia;
}

function calcularDuracionTotal(plan){
    var suma = 0;
    for (let i = 0; i < plan.ejers.length; i++) {
       suma+=plan.ejers[i].duracion;
        
    }
    return suma;
}

function actualizarEjercicio(plan, nombreEjercicio, dur, int = plan.ejers.intensidad){
    const copia = {...plan, ejers: plan.ejers.map((ej)=> ej.nombre == nombreEjercicio ? {...ej, duracion:dur, intensidad:int}:ej),};
    return copia;

}

function buscarEjercicioRecursivo(plan, nombreEjercicio){

}

function multiplicarDuracionesEjercicios(...duraciones){

}

function ordenarEjercicios(plan, criterio){
    const copia = {...plan};

    if(criterio == "nombre"){
        return copia.sort();
    }

    

}



var ejer = crearEjercicio("Dominadas", 1, 1);
var ejer2 = crearEjercicio("Sentadillas", 5, 7);
var plan = crearPlan("Primer plan");

console.log("AGREGAR EJERS A PLAN")

var prueba = agregarEjercicio(plan, ejer);
var prueba2 = agregarEjercicio(plan, ejer2);
console.log(prueba);

var eliminar = eliminarEjercicio(plan, ejer, 7);
console.log("TRAS ELIMINAR:");
console.log(eliminar);

var listar = listarEjercicios(plan);
var filtrar = filtrarEjercicios(plan, 5);
console.log(filtrar);

console.log("DURACION TOTAL:");
var total = calcularDuracionTotal(plan);
console.log(total);

console.log("ACTUALIZAR EJERCICIO");
var actualizar = actualizarEjercicio(plan, ejer2, 7 );
console.log(actualizar);
