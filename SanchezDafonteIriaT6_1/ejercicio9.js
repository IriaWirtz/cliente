const cont = document.getElementById("contenedorImagen");
const img = document.getElementById("imagenMostrada");

document.addEventListener("keydown", (evento) => {
    switch (evento.key) {

        case "0":
            img.setAttribute("src", "imagen0.png");
            cont.textContent ="";
            cont.append(img);
            break;

        case "1":
            img.setAttribute("src", "imagen1.png");
             cont.textContent ="";
             cont.append(img);
             break;
        case "2":
             img.setAttribute("src", "imagen2.png");
              cont.textContent ="";
              cont.append(img);
              break;

        case "3":
             img.setAttribute("src", "imagen3.png");
              cont.textContent ="";
              cont.append(img);
              break;

        default:
            cont.textContent = "Número no válido";
    }
})