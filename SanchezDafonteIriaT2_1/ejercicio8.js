const prompt = require('prompt-sync')();
var num1 = prompt("Ingresa el primer número ");
var num2 = prompt("Ingresa el segundo número ");
var res;
if(num1 % num2 == 0){
    res = true;
}
else res = false;
console.log(res);