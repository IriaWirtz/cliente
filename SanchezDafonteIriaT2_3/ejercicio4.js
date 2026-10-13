const prompt = require('prompt-sync')();

var destino = prompt("¿Cuál es tu destino? (nacional o internacional): ");
var edad = (Number) (prompt("¿Qué edad tienes?: "));
var diaVuelo = (Number) (prompt("¿Qué día es tu vuelo?: "));
var diaReserva =(Number) (prompt("¿Qué día reservaste el billete?: "));

if( !(edad <= 0 || edad >= 0) || !(diaVuelo >= 0 || diaVuelo <= 0) || !(diaReserva >= 0 || diaReserva <=0)){
    console.log("Error de formato");
}

var precioBase = 100;

if(!(destino == 'nacional' || destino == 'internacional') || !(diaVuelo >= 1 && diaVuelo <= 30) || !(diaReserva >= 1 && diaReserva <=30) || (diaVuelo<diaReserva) ){
    precioBase = 0;
    console.log(precioBase);

}

else{
    if(destino == 'internacional'){
        precioBase = precioBase - (precioBase*0.2);
    }
    if((diaVuelo - diaReserva) < 7){
        precioBase = precioBase + (precioBase*0.15);
    }
    if(edad > 65){
        precioBase = precioBase - (precioBase*0.1);
    }
    if(edad < 12){
        precioBase = precioBase - (precioBase*0.12);
    }
    console.log(precioBase);

}




