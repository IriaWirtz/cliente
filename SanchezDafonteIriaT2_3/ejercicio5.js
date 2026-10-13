const prompt = require('prompt-sync')();

var num = (Number) (prompt("Dame un número entero: "));
var opcion = (Number) (prompt("Opción 1. un número decimal a su equivalente binario, Opción 2. un número octal a su equivalente binario o Opción 3. un número hexadecimal a su equivalente binario: "));

if(!(num <= 0 || num>= 0) || !(opcion <= 0 || opcion >= 0)){
    console.log("Error de formato");
}
var res='';

switch(opcion){
    case 1: 
     while(num >= 2){
        res= num%2 + res;
        num= num/2;
        num = parseInt(num,10);
       
       
        }
         if(num == 1){
            res= '1' + res;
        }

     break;


    case 2:
    
        while(num >= 2){
             
            res = num%8 + res;
            num /= 8;
            num = parseInt(num,10);
           
        }

        if(num == 1){
            res = '1' + res;
        }


        break;


    case 3:
       res = num.toString(16);
       break;

    default: console.log("Operación no permitida");
}

console.log(res);