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

    if(sep.length != 2 || con =="" || user==""){
        console.log("Entrada inválida");
    }


   else {Mapa.set(user,con);
    MapaBloq.set(user, 0);
    registros++;
   }
    
  
}


while(bloqs != Mapa.size) {
var comprobar = prompt("Introduce de nuevo el usuario y contraseña: ");

var sepcomp = comprobar.split(" ");

var compUser = sepcomp[0];
var compCon = sepcomp[1];

if(sepcomp.length != 2 || compUser =="" || compCon==""){
    console.log("Entrada inválida");
    }

else if(!Mapa.has(compUser)){
    console.log("Usuario o contraseña incorrecta");

}    
else if(MapaBloq.get(compUser) == "Bloqueada")  {
    console.log("Cuenta bloqueada");
}  
   
else if(Mapa.get(compUser)==compCon){
    console.log("Usuario logeado");
    break;
}

else {
        intentos = MapaBloq.get(compUser);
        intentos++;

        if (intentos == 3) {
            MapaBloq.set(compUser, "Bloqueada");
            bloqs++;

            console.log("Cuenta bloqueada");

        }
        else {
            MapaBloq.set(compUser, intentos);
            console.log("Usuario o contraseña incorrecta");
        }
    }
}

if(bloqs == Mapa.size){
    console.log("Todos los usuarios están bloqueados");
}

    




    


   





