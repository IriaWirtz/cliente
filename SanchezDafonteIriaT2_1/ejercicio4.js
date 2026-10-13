const prompt = require('prompt-sync')();
var horas = prompt("Dame las horas y las transformare a segundos ");
var secs = horas*3600;
console.log(secs);