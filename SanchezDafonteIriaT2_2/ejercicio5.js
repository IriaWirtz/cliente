const prompt = require('prompt-sync')();
var ruedas = prompt("¿Tus ruedas están infladas? ");
var accidente = prompt("Has tenido algún accidente? ");
var frenos = prompt("¿Tienes frenos funcionales? ");

var res = (ruedas == "No" || accidente == "Si" || frenos == "No") ? "Mantenimiento necesario" : "A la carrera";
console.log(res);