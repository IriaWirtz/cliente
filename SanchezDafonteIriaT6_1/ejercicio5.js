const quitarVocal = document.querySelectorAll('button');
const texto = document.getElementById('texto');

quitarVocal.forEach((boton) =>{
    boton.addEventListener('click', () =>{
        if(texto.textContent.includes(boton.textContent.toLocaleLowerCase())){
            texto.textContent = texto.textContent.replaceAll(boton.textContent.toLocaleLowerCase(), "");
             texto.textContent = texto.textContent.replaceAll(boton.textContent, "");
        }
    })
}
)

