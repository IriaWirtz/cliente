const prompt = require('prompt-sync')();

var res = '';
var aux = 1;
var cero = 0;

for (let index = 0; index < 19; index++) {
    if (index > 8) {
        res += cero;
        aux--;

        cero = aux;

       
    }

    else { res += aux;

    aux++;
    }
    console.log(res);
}
