const prompt = require('prompt-sync')();

var num = (Number)(prompt("Dame un número y te diré si es primo: "));
var res;

if(!(num <= 0 || num>= 0)){
    console.log("Error de formato");
}
else{

    if(num == 0 || num < 0 ){
        res = false;
    }

for (let i = 2; i < num; i++) {


    if (num % i == 0) {
        res = false;
        break;
    
    }
    else res = true;

}
   if(num == 1 || num == 2){
        res = true;
        
    }

console.log(res);
}


