const prompt = require('prompt-sync')();

var mes = prompt("Inserta un mes: ");
var dia = (Number) (prompt("Inserta un día: "));

if(!((dia >=0 || dia <=0) && (mes == 'enero' || mes == 'febrero' || mes == 'marzo' || mes == 'abril' || mes == 'mayo' || mes == 'junio' || mes == 'julio' || mes == 'agosto' || mes == 'septiembre' || mes == 'octubre' || mes == 'noviembre' || mes == 'diciembre'))){
    console.log("Error de formato");

}

else{
   

switch (mes){
    
    case 'febrero':
        if(dia > 29 || dia < 1){
            console.log("Día inexistente");
            break;
        }
        console.log("Día normal");
        break;
    
    
    case 'julio': case 'agosto': 
          if(dia > 31 || dia < 1){
            console.log("Día inexistente");
            break;
        }  
        console.log("Día normal");
        break;

    case 'abril': case 'junio' : case 'septiembre':
        if(dia > 30 || dia < 1){
            console.log("Día inexistente");
            break;
        }  
        console.log("Día normal")
    case 'enero': case 'mayo':
        if(dia > 31 || dia < 1){
            console.log("Día inexistente");
            break;
        }  
        if(dia == 1){
            console.log("Fiesta");
            break;
        } 
        console.log("Día normal");
        break;
    case 'noviembre':    
          if(dia > 30 || dia < 1){
            console.log("Día inexistente");
            break;
        }  
        if(dia == 1){
            console.log("Fiesta");
            break;
        }
        console.log("Día normal");
        break;
    case 'marzo':
        if(dia > 31 || dia < 1){
            console.log("Día inexistente");
            break;
        }  
        if(dia == 29){
            console.log("Fiesta");
            break;
        }  
         console.log("Día normal");
        break;
    case 'octubre':
        if(dia > 31 || dia < 1){
            console.log("Día inexistente");
            break;
        }  
        if(dia == 12){
            console.log("Fiesta");
            break;
        }  
         console.log("Día normal");
        break;
    case 'diciembre':
        if(dia > 31 || dia < 1){
            console.log("Día inexistente");
            break;
        }  
        if(dia == 6 || dia == 25){
            console.log("Fiesta");
            break;

        } 
         console.log("Día normal");
        break; 
    default: console.log("Día inexistente");                    
}
}



