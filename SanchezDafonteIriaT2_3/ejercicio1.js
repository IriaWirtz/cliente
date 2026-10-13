const prompt = require('prompt-sync')();
var nota = (Number)( prompt("Ingresa tu calificación: "));

if(!(nota <=0 || nota >= 0)){
    console.log("Error de formato");
}
else{
    if(nota >= 0 && nota <=59){
        console.log("F");
        if(nota < 50) console.log("suspenso");
    }
    else if(nota <= 69 && nota >= 60){
        console.log("D");
    }
    else if(nota <= 79 && nota >= 70){
        console.log("C");
    }
    else if(nota <= 89 && nota >= 80){
        console.log("B");
    }
    else if(nota <= 100 && nota >= 90)console.log("A");

    else console.log("ERROR");
}