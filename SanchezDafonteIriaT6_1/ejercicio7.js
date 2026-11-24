const listaStrings = ["Manzana", "Banana", "Naranja", "Pera", "Uva", "Melón", "Sandía", "Piña"];

const lista = document.getElementById('listaAutocompletar');
const busqueda = document.getElementById('inputBusqueda');

for (const fruta of listaStrings) {
    const elemento = document.createElement('li');
    elemento.textContent = fruta;
    lista.append(elemento);
}

busqueda.addEventListener('input', () => {
    const texto = busqueda.value.toLowerCase().trim();

    lista.innerHTML = "";

    for (const fruta of listaStrings) {
        if (fruta.toLowerCase().includes(texto)) {
            const elemento = document.createElement('li');
            elemento.textContent = fruta;
            lista.append(elemento);
        }
    }
});