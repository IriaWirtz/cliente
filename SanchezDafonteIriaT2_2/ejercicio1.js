const prompt = require('prompt-sync')();
var arbol1 = prompt("Ingres la altura del primer árbol");
var arbol2 = prompt("Ingres la altura del segundo árbol");
var arbol3 = prompt("Ingres la altura del tercer árbol");
let res = (arbol1>10 || arbol2 > 10 || arbol3 > 10) ? true : false
console.log(res);