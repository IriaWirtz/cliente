const prompt = require('prompt-sync')();

var num1 = (Number) (prompt("Ingresa el primer número: "));
var num2 = (Number) (prompt("Ingresa el segundo número: "));

if(!(num1 <= 0 || num1>= 0) || !(num2 <= 0 || num2 >= 0)){
    console.log("Error de formato");
}

else{

var opcion = prompt("¿Qué quieres hacer? Tus opciones son: suma, resta, multiplicacion y divison: ");

var res;


switch(opcion){
    case 'suma':
        res = num1 + num2;
        console.log(res);
        break;
    case 'resta':
        res = num1 - num2;
        console.log(res);
        break;
    case 'multiplicacion':
        res = num1*num2;
        console.log(res);
        break;
    case 'division':
        if(num1 == 0 || num2 == 0){
          console.log("ERROR");
          break;
        }
        res = num1/num2; 
        console.log(res);
        break;   
     default: console.log("Operación no permitida");        
}


}
