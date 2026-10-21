const prompt = require('prompt-sync')();

var frase = String(prompt("Introduce la frase: "));

var min = String(frase.toLowerCase());

var noSignos = min.replace(/[.,;:!?¡¿"'()-]/g, "");

var sep = noSignos.split(" ");


const Mapa = new Map();
const Anagrama = new Map();


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
   
    console.log(`${clave}: ${valor}`);
   
   
}

var Repes2 = new Set();

for (let i = 0; i < sep.length; i++) {
    if(sep[i] == "" || Repes2.has(sep[i])){

    }
    else{
    var claveAnagrama = sep[i].split("").sort().join("");
    if(Anagrama.has(claveAnagrama)){
        Anagrama.set(claveAnagrama, Anagrama.get(claveAnagrama)+1);
    }
    else{ Anagrama.set(claveAnagrama, 1);}

    Repes2.add(sep[i]);
}
   
    
}

var Repes = new Set();

for(const[clave, valor] of Anagrama){
    var cont = 0;
    let cadena ="Anagramas: ";
    if(valor > 1){
        for (let i = 0; i < sep.length;i++) {
        
            if(sep[i].split("").sort().join("") == clave && !Repes.has(sep[i])){
                if(valor - 1>cont){
                    cadena+= sep[i] + ", ";
                    cont++;
                    
                }
                else {cadena+= sep[i];
                
                }
                 Repes.add(sep[i]);

            }
            
        }
        console.log(cadena);
    }
}


