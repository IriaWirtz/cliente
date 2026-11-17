const atras = document.querySelector("#atras");
const adelanta = document.querySelector("#adelante");

atras.onclick=() => {
    history.back();
}

adelante.onclick=() => {
    history.forward();
}