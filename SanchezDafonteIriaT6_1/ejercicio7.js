const listaStrings = ["Manzana", "Banana", "Naranja", "Pera", "Uva", "Melón", "Sandía", "Piña"];

let lista = document.getElementById('listaAutocompletar');
let busqueda = document.getElementById('inputBusqueda');

listaStrings.forEach((fruta) => {
    const elemento = document.createElement('li');
    elemento.textContent = fruta;
    lista.append(elemento);
})

busqueda.addEventListener('input', () => {
    lista.innerHTML = "";
    listaStrings.forEach((fruta) => {
        console.log(fruta);
        console.log(busqueda.textContent);
        if (fruta.includes(busqueda.textContent)) {
            const elemento = document.createElement('li');
            elemento.textContent = fruta;
            lista.append(elemento);
        }
    })

})

