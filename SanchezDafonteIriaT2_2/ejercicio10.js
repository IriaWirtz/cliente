const prompt = require('prompt-sync')();

console.log("¿Estás a punto de comprar el Smartphone Galaxy Z Flio 8 por 1150 euros, quieres configurar algún extra? ");

var memoria = prompt("¿Deseas agregar más memoria?");
var cam = prompt("¿Deseas una mejor cámara? ");
var funda = prompt("¿Deseas una funda protectora? ");

var precio = 1150;
var precio = (memoria == "Si")?precio+100:precio+0;
var precio = (cam == "Si")?precio+50: precio+0;
var precio = (funda == "Si")?precio+30:precio+0;
console.log(precio);