const botonVer = document.getElementById("ver");
let clave = document.getElementById("clave");
botonVer.addEventListener('click', () => {

    if (clave.getAttribute("type") == "password") {
        clave.getAttribute('password')
        botonVer.textContent = "Ocultar";
        clave.setAttribute('type', 'text')
    }

    else {

        clave.setAttribute('type', 'password');
        botonVer.textContent = "Mostrar";

    }
})