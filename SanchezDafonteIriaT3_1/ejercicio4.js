const prompt = require('prompt-sync')();

const matriz = [
  prompt("Introduce un número: "),
  prompt("Introduce un número: "),
  prompt("Introduce un número: "),
  prompt("Introduce un número: "),
  prompt("Introduce un número: "),
  prompt("Introduce un número: "),
  prompt("Introduce un número: "),
  prompt("Introduce un número: "),
  prompt("Introduce un número: "),
  prompt("Introduce un número: ")
];

var reps = 0;
var cont= 0;

for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz.length; j++) {

    if (matriz[i] == matriz[j] ) {
      cont++;

    }
   
  }
  if(!(cont == 1)){
    reps++;
  }
  cont = 0;
}

console.log(reps);