const prompt = require('prompt-sync')();

var conjunto = new Set();

for (let i = 0; i < 5; i++) {
   var palabra = prompt("Introduce las palabras: ");
    conjunto.add(palabra);
    
}

console.log(conjunto.size);