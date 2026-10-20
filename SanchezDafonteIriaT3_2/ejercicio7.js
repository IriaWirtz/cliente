const prompt = require('prompt-sync')();

const Mapa = new Map();
const MapaBloq = new Map();
var intentos=0;
var registros=0;
var bloqs=0;

while(registros != 3){
    var userycon = prompt("Introduce el usuario y contraseña: ");
    var sep = userycon.split(" ");

    var user = sep[0];
    var con = sep[1];

    if(sep.length != 2 || Number.isInteger(user) || Number.isInteger(con) || con =="" || user==""){
        console.log("Entrada inválida");
    }


   else {Mapa.set(user,con)
    registros++;
   };
    
  
}


while(bloqs != Mapa.size) {
var comprobar = prompt("Introduce de nuevo el usuario y contraseña: ");

var sepcomp = comprobar.split(" ");

var compUser = sepcomp[0];
var compCon = sepcomp[1];

if(sep.length != 2 || Number.isInteger(user) || Number.isInteger(con) || con =="" || user==""){
    console.log("Entrada inválida");
    }
   
else if(Mapa.has(compUser) && Mapa.get(compUser)==compCon && MapaBloq.get(compUser) != "Bloqueada"){
    console.log("Usuario logeado");
    break;
}
else if(!Mapa.has(compUser)){
    console.log("Usuario o contraseña incorrecta");

}
else if(Mapa.has(compUser) && !MapaBloq.has(compUser)) {
    console.log("Usuario o contraseña incorrecta")
    MapaBloq.set(compUser, 1);
    intentos++;
}
else if(MapaBloq.has(compUser) && MapaBloq.get(compUser) !=3){ MapaBloq.set(compUser, MapaBloq.get(compUser)+1);
    intentos++;}

else if(MapaBloq.get(compUser) != "Bloqueada") {
    console.log("Cuenta bloqueada");
    MapaBloq.set(compUser, "Bloqueada");
    bloqs++;
}    

    




    
}

   





