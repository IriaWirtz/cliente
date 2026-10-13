const prompt = require('prompt-sync')();
var texto = prompt("Ingresa un texto y te dire el número de palabras ");
var i = 0;
var cont = 1;
while (i <= texto.length){

    if(texto.charAt(i) == " "){
        cont++;
    }
        i++;
}
console.log(cont);