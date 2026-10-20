const prompt = require('prompt-sync')();

var Mapa = new Map();

var max = -Infinity;

var res;


while(Mapa.size !=5){
    var jugador = prompt("Dame tu nombre y puntuación: ");
    var sep = jugador.split(" ");
    var clave = sep[0];
    var valor= Number(sep[1]);
    if(Mapa.has(clave) || sep.length != 2 || Number.isNaN(valor) || sep[0] =="" || sep[1] == ""){
       console.log("Entrada inválida");
    }
    else Mapa.set(clave, valor);
    
}



 for(const [clave, valor] of Mapa){
    if(valor > max){
        max = valor;
        res = clave;
    }
   else if(valor == max){
        res = "Empate entre jugadores";
    }
}

console.log(res);




