let elemento = document.getElementById("elementoSigueCursor");
document.addEventListener('mousemove', (evento) =>{
    let x = evento.pageX;
    let y  = evento.pageY;

    elemento.style.left=`${x}px`;
    elemento.style.top=`${y}px`;
})