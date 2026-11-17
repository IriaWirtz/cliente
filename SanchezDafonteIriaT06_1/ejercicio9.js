let texto = document.querySelector("#estado");


if(navigator.onLine == true){
    texto.textContent="Conectado";
}

else {
    texto.textContent= "Sin conexión";
}



window.ononline = () =>{
    texto.textContent="Conectado";
}

window.onoffline = () =>{
     texto.textContent="Sin conexión";
}