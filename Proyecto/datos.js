

function crearEjercicio(nombre, duracion, intensidad) {
    if (Number.isInteger(nombre) || !(duracion > 0) || !(intensidad <= 10 && intensidad >= 1) || nombre.trim() == "" || !Number.isInteger(intensidad)) {
        return null;
    }
    else {
        const ejercicios = {
            nombre: nombre,
            duracion: duracion,
            intensidad: intensidad
        }
        return ejercicios;
    }

}

function crearPlan(nombre) {
    const plan = {
        nombre: nombre,
        ejercicios: []
    };

    return plan;
}

function agregarEjercicio(plan, ejercicio) {
    const nuevoEjer = [...plan.ejercicios];
    nuevoEjer.push(ejercicio);

    const copia = {
        nombre: plan.nombre,
        ejercicios: nuevoEjer
    };

    return copia;
}

function eliminarEjercicio(plan, nombreEjer) {
    const copiaEj = plan.ejercicios.filter((ejer) => ejer.nombre != nombreEjer);
    const copia = {
        nombre: plan.nombre,
        ejercicios: copiaEj
    }




    return copia;
}

function listarEjercicios(plan) {
    if (plan.ejercicios.length < 1) {
        console.log("El plan no tiene ejercicios.");
    }

    else {
        for (const ej of plan.ejercicios) {
            console.log(`${ej.nombre}: ${ej.duracion} minutos`);
        }
    }
}

function filtrarEjercicios(plan, intensidad) {
    const copia = plan.ejercicios.filter((valor) => valor.intensidad <= intensidad);

    return copia;
}


function actualizarEjercicio(plan, nombreEjercicio, dur, int) {
    const copia = {
        ...plan,
        ejercicios: plan.ejercicios.map((ej) =>
            ej.nombre === nombreEjercicio
                ? { ...ej, duracion: dur, intensidad: int ?? ej.intensidad }
                : ej
        )
    }
    return copia;
}

function buscarEjercicioRecursivo(plan, nombreEjercicio, pos = 0) {
    if (pos >= plan.ejercicios.length) {
        return null;
    }
    if (plan.ejercicios[pos].nombre == nombreEjercicio) {
        return plan.ejercicios[pos];
    }
    pos++;

    return buscarEjercicioRecursivo(plan, nombreEjercicio, pos);


}



function ordenarEjercicios(plan, criterio) {
    const ejercicios = [...plan.ejercicios];

    if (criterio === "nombre") {
        ejercicios.sort((a, b) => a.nombre.localeCompare(b.nombre, 'es'));
    } else if (criterio === "duracion") {
        ejercicios.sort((a, b) => a.duracion - b.duracion);
    } else if (criterio === "intensidad") {
        ejercicios.sort((a, b) => a.intensidad - b.intensidad);
    } else {
        return plan;
    }

    return { ...plan, ejercicios };
}

function buscarEjerciciosPorNombre(plan, nombreParcial) {
    const busqueda = nombreParcial.toLowerCase();
    return plan.ejercicios.filter(ejercicio =>
        ejercicio.nombre.toLowerCase().includes(busqueda));
}

function combinarPlanes(plan1, plan2) {
    const nom1 = plan1.nombre;
    const nom2 = plan2.nombre;

    const ejer1 = [...plan1.ejercicios];
    const ejer2 = [...plan2.ejercicios];

    const union = ejer1.concat(ejer2);

    let nuevoPlan = {
        nombre: nom1 + " + " + nom2,
        ejercicios: []
    }

    const vistos=[];

    for(const ejer of union){
        vistos.push(ejer.nombre);
        let cont = 0;

        for(const nombre of vistos){
            if(nombre == ejer.nombre){
                cont++;
            }
        }

        var nombreFinal = ejer.nombre;
        if(cont > 1){
            nombreFinal += cont; 
        }

        const nuevoEjer = {
            nombre:nombreFinal,
            duracion:ejer.duracion,
            intensidad:ejer.intensidad
        };

        nuevoPlan = agregarEjercicio(nuevoPlan, nuevoEjer);
    }
    return nuevoPlan;





}





module.exports = {
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
};




