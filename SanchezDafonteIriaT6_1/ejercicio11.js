let contenido = document.getElementById("contenido");
const boton = document.getElementById("limpiarBtn");

document.addEventListener("keydown", (evento)=>{
    if(evento.key.length === 1 ){
        contenido.textContent += evento.key;
    }
});

boton.addEventListener("click", ()=>{
    contenido.textContent = "";
})