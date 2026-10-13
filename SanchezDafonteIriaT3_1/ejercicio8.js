const prompt = require('prompt-sync')();

var res = [];
var aux = 1;
var cero = 0;

for (let index = 0; index < 37; index++) {
    if (index > 8 && index <=18) {
        res[index] = cero;
        aux--;

        cero = aux;


       
    }

    else if(index > 18){
        res.shift();
    }



    else { res [index] = aux;

    aux++;
    }
    console.log(JSON.stringify(res));
}