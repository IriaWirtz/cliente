const botonGuardar = document.getElementById("guardar");
const nombre = document.getElementById("nombre");
const botonOlvidar = document.getElementById("olvidar");
const saludo = document.getElementById("saludo");
let cookieNombre = document.cookie;


botonGuardar.addEventListener("click", ()=>{
    const nombreSinEspacios = nombre.value.trim();
    if(cookieNombre != "max-age=0"){
        saludo.textContent = "Hola de nuevo, " + nombreSinEspacios;
    }

    if(nombreSinEspacios=== null || nombreSinEspacios === ""){

    }
   
    else {
    saludo.textContent = "Hola, " + nombreSinEspacios;

    cookieNombre= "max-age=604800";

    }

})

botonOlvidar.addEventListener("click", ()=>{
    cookieNombre = "max-age=0";
})

