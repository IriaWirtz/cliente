const prompt = require('prompt-sync')();

var cajas = prompt("Introduce el peso de las cajas ");

var caja1 = cajas.substring(0,2);
var caja2 = cajas.substring(3,5);
var caja3 = cajas.substring(6,10)

var res = (caja1 > caja2 && caja1 > caja3)?"La caja más pesada es la primera":(caja2 > caja1 && caja2 > caja3)?"La caja más pesada es la segunda":(caja3 > caja1 && caja3 > caja2)?"La caja más pesada es la tercera":"ERROR";
console.log(res);