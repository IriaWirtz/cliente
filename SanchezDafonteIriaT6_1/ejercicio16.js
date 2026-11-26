const botonGuardar = document.getElementById("guardar");
const nombre = document.getElementById("nombre");
const botonOlvidar = document.getElementById("olvidar");
const saludo = document.getElementById("saludo");

    const cookies = document.cookie.split('; ');
    const cookie = cookies.find((c) => c.startsWith("nombre="));
    if(cookie){
        let nombreSinEspacios = cookies.split("=");
        saludo.textContent = "Hola de nuevo, " + decodeURIComponent(nombreSinEspacios);
    }


botonGuardar.addEventListener("click", ()=>{
    nombreSinEspacios = nombre.value.trim();
   
    if(nombreSinEspacios=== null || nombreSinEspacios === ""){

    }
   
    else {
    saludo.textContent = "Hola, " + nombreSinEspacios;

    document.cookie= "nombre="+ encodeURIComponent(nombreSinEspacios) + ";max-age=604800";

    }

})

botonOlvidar.addEventListener("click", ()=>{
   document.cookie= "nombre=;max-age=0";
    saludo.textContent = "";
})

