const prompt = require('prompt-sync')();

var frase = prompt("Introduce la frase: ");

var sep = frase.split(" ");

const Mapa = new Map();


for (let i = 0; i < sep.length; i++) {
    if(sep[i] == ""){
        continue;
    }
    else if(!Mapa.has(sep[i])){
        Mapa.set(sep[i], 1)
    }
   
    else Mapa.set(sep[i], Mapa.get(sep[i])+1)
}


for(const[clave, valor] of Mapa){
    console.log(`${clave} aparece ${valor} veces`);
}

