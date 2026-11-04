function calcularDuracionTotal(plan){
    var suma = 0;
    for (let i = 0; i < plan.ejercicios.length; i++) {
       suma+=plan.ejercicios[i].duracion;
        
    }
    return suma;
}

function multiplicarDuracionesEjercicios(...duraciones){
    var prod=1;
    if(duraciones.length == 0){
        return 1;
    }
    for (let i = 0; i < duraciones.length; i++) {
       prod= prod * duraciones[i];
        
    }
    return prod;

}

function estadisticasPlan(plan){
    var duracionPromedio = 0;
    var intensidadPromedio = 0;
    var totalEjercicios = 0;

    for (var ejer of plan.ejercicios) {
        duracionPromedio += ejer.duracion;
        intensidadPromedio += ejer.intensidad;
        totalEjercicios++;
    }

    if (totalEjercicios > 0) {
        duracionPromedio /= totalEjercicios;
        intensidadPromedio /= totalEjercicios;
    }

    const res = {
        duracionPromedio: duracionPromedio,
        intensidadPromedio: intensidadPromedio,
        totalEjercicios: totalEjercicios
    };

    return res;
}

module.exports={
    calcularDuracionTotal,
    multiplicarDuracionesEjercicios,
    estadisticasPlan
};
