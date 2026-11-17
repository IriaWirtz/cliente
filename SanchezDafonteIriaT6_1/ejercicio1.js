let opcion = document.getElementById("colorSelect");

opcion.addEventListener('change', ()  => {
    document.body.style.backgroundColor = opcion.value;
})
