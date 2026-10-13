const prompt = require('prompt-sync')();
var distancia = prompt("Dame la disntancia a recorrer en Km ");
var caminar = distancia / 4;
var coche = distancia / 60;
var tren = distancia / 100;
console.log(caminar);
console.log(coche);
console.log(tren);