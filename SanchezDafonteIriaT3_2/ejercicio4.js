const prompt = require('prompt-sync')();

const Conjunto = new Set();

var asistir= false;
do{
    var nombre = prompt("Introduce el nombre del asistente: ");
    if(nombre == "fin"){
        break;
    }
    else Conjunto.add(nombre);

}


while(nombre != "fin");


var pregunta = prompt("Qué persona quieres saber si asistió al evento: ");

for(nombre of Conjunto){
    if(nombre == pregunta){
        asistir = true;
    }
   
}

if(asistir) console.log("Asistió");
else console.log("No asistió");