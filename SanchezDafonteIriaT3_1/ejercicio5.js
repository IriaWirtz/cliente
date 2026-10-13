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

var reps = [];
var cont = 0;
var valor=0;
var num=0;
var flag=false;

for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz.length; j++) {

    if (matriz[i] == matriz[j]) {
      cont++;
      

    }
   
  }
  if(cont == 10){
    flag = true;
    console.log("error");
  }

   reps[i]=cont;

   cont=0;
   }

   for (let i = 0; i < reps.length; i++) {
    if(reps[i] > valor){
      valor=i;
      num= reps[i];
    }
   else if(reps[i] == num){
      console.log("error");
      flag = true;
      break;
      
    }
    
   }

  


   


if (!flag){
console.log(matriz[valor]);
}