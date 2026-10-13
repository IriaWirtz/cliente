const prompt = require('prompt-sync')();

var coche1 = (Number)(prompt("Dame la velocidad del primer coche "));
var coche2 = (Number)(prompt("Dame la velocidad del segundo coche "));

var res = (coche1 > coche2)?"El coche más rápido es el coche 1":(coche2 > coche1)?"El coche más rápido es el coche 2":"ERROR";
console.log(res);