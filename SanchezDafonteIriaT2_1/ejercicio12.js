const prompt = require('prompt-sync')();
var dis1 = prompt("Ingresa la distancia entre la estacion 1 y 2 ");
var dis2 = prompt("Ingresa la distancia entre la estacion 2 y 3 ");
var dis3 = prompt("Ingresa la distancia entre la estacion 3 y 1 ");
var vel = prompt("Ingresa la velocidad del tren en km/h " );

var en1 = dis1/vel * 60;
var en2 = en1 + dis2/vel * 60;
var en3=  en2 + dis3/vel * 60;

console.log(`Si el tren viaja a ${vel} km/h, tardaría en llegar ${en1} minutos a la primera estación, ${en2} minutos a la segunda y ${en3} minutos en completar el recorrido completo `);




