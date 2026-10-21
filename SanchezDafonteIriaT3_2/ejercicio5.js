const prompt = require('prompt-sync')();

const Mapa = new Map();

var media=Number (0);

var cont= Number (0);

var cont2=0;
while(cont2 != 5){
    var nota = prompt("Introduce el estudiante y nota: ");
    var sep = nota.split(" ");
    var clave="";
    for (let i = 0; i < sep.length-1; i++) {
         clave += sep[i];
        
    }
   
    var valor = Number(sep[sep.length-1]);


     if(sep.length < 2 || Number.isNaN(valor) || sep[0] =="" || sep[1] == ""){
       console.log("Entrada inválida");
    }

    else {Mapa.set(clave, valor);
        cont2++;
    }
    clave = "";
}


for(const[clave, valor] of Mapa){
    media +=valor;
    cont++;
}

media /= cont;

console.log(media);

