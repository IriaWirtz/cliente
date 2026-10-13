const prompt = require('prompt-sync')();
var nota1 = prompt("Dame la primera nota ");
var nota2 = prompt("Dame la segunda nota ");
var nota3 = prompt("Dame la tercera nota ");

var res = ((nota1 >= 8 && nota2 >= 8 && nota3 >=5 )|| (nota1 >= 8 && nota3 >= 8 && nota2>=5) || (nota2 >= 8 && nota3 >= 8 && nota1>=5))?true:false;
console.log(res);