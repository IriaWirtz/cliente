const prompt = require('prompt-sync')();
var segundos = prompt("Ingresa los segundos ");
var horas = 0;
var minutos = 0;
while(segundos >= 3600){
    horas++;
    segundos = segundos -3600;
}

while (segundos >= 60){
    minutos++;
    segundos = segundos - 60;
}



console.log(`${horas} horas, ${minutos} minutos y ${segundos} segundos`);