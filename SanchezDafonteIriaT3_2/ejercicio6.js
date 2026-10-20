const prompt = require('prompt-sync')();

const conjunto = new Set();

var flag=true;

var res="";

do{
    var texto =  prompt("Introduce el número: ");
    var num = Number (texto);
    if( num =="" && texto != '0' || !Number.isInteger(Number(texto))){
        console.log("Entrada inválida");
    }
    else if(conjunto.has(num)){
         for(num of conjunto){
            if(res == ""){
            res += num;
            }
            else res+= ", " + num;
        }
        console.log(res);
        flag= false;
        break;
    }
    else conjunto.add(num);
     

}
while(flag);

