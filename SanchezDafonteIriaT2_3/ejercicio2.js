const prompt = require('prompt-sync')();

var sec = (Number) (prompt("Introduce los segundos: "));
var cont = 0;
var esverde = true ;
var esamarillo = false ;
var esrojo=false;

if(!(sec <=0 || sec > 0)){
    console.log("Error de formato");
}

else{

    while(sec > 0){
        cont++;
        sec--;
    
        if(cont > 30 && esverde == true){
            cont=0;
            esverde = false;
            esamarillo= true;
        }

        if(cont >= 5 && esamarillo == true ){
            cont = 0;
            esamarillo = false;
            esrojo = true;
        }

        if(cont >= 25 && esrojo == true){
            cont = 0;
            esrojo = false;
            esverde = true;
        }
       
      
    }


     if(esverde) console.log("verde")
    else if (esamarillo) console.log("amarillo")
    else if(esrojo)console.log("rojo")
}