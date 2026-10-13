const prompt = require('prompt-sync')();
var precio = prompt("Ingresa el precio ");
var descuento = prompt("Ingresa el porcentaje de descuento ");
var total = precio - (precio * (descuento/100));
console.log(total);