const prompt = require('prompt-sync')();
var pase_anual = prompt("¿Tienes pase anual? ");
var entrada = prompt("¿Compraste una entrada? ");

var res = (pase_anual == "Si" || entrada == "Si")? "Puedes entrar al parque":"No puedes entrar al parque";
console.log(res);