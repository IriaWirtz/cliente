let elemento = document.getElementById("elementoSigueCursor");
document.addEventListener('mousemove', (evento) =>{
    evento.pageX = elemento.left;
    evento.pageY = elemento.top;
})