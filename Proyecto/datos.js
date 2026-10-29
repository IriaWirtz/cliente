

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

function eliminarEjercicio(plan, nombreEjer){
       const copiaEj = plan.ejers.filter((ejer) => ejer.nombre != nombreEjer);
       const copia = {
        nombre : plan.nombre,
        ejers: copiaEj}


  
 
    return copia;
    }

function listarEjercicios(plan){
    if(plan.ejers.length < 1){
        console.log("El plan no tiene ejercicios");
    }

    else {for(const ej of plan.ejers){
        console.log(`${ej.nombre}: ${ej.duracion} minutos`);
    }
}
} 

function filtrarEjercicios(plan, intensidad){
    const copia = plan.ejers.filter((valor) => valor.intensidad <= intensidad);

    return copia;
}


function actualizarEjercicio(plan, nombreEjercicio, dur, int = plan.ejers.intensidad){
    const copia = {...plan, ejers: plan.ejers.map((ej)=> ej.nombre == nombreEjercicio ? {...ej, duracion:dur, intensidad:int}:ej)};
    return copia;

}

function buscarEjercicioRecursivo(plan, nombreEjercicio, pos=0){
    if(plan.ejers[pos].nombre == nombreEjercicio){
        return plan.ejers[pos].nombre;
    }
    pos++;

    return buscarEjercicioRecursivo(plan, nombreEjercicio, pos);


}



function ordenarEjercicios(plan, criterio){
    if(criterio == "nombre"){
        for (let i = 0; i < plan.length; i++) {
            plan.ejers[i].nombre.localeCompare(plan.ejers[i+1])
            
        }
    }



    

}





module.exports={
    crearEjercicio, 
    crearPlan,
    agregarEjercicio,
    eliminarEjercicio,
    listarEjercicios,
    filtrarEjercicios,
    actualizarEjercicio,
    buscarEjercicioRecursivo,
    ordenarEjercicios
};


