let caja = document.getElementById("caja");
let topCaja = 400;
let leftCaja = 100;
document.addEventListener("keydown", (evento) =>{
    switch(evento.key){
        case 'ArrowUp':
            topCaja -= 10;
            caja.style.top= topCaja + 'px';
            break;

         case 'ArrowDown':
            topCaja += 10;
            caja.style.top= topCaja + 'px';
            break;
            
         case 'ArrowLeft':
            leftCaja-= 10;
            caja.style.left= leftCaja + 'px';
            break;
            
         case 'ArrowRight':
            leftCaja+= 10;
            caja.style.left= leftCaja + 'px';
            break;    

        default:

    }
})