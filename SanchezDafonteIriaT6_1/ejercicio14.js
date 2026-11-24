const subir = document.querySelectorAll(".subir");
const bajar = document.querySelectorAll(".bajar");

for (let botonA of subir) {
    botonA.addEventListener("click", () => {
        const ciudadA = botonA.closest("li");
        const anterior = ciudadA.previousElementSibling;

        if (anterior != null) {

            anterior.before(ciudadA);
        }
    });
}


for (let botonB of bajar) {
    botonB.addEventListener("click", () => {
        const ciudadB = botonB.closest("li");
        const siguiente = ciudadB.nextElementSibling;
        if (siguiente != null) {
            siguiente.after(ciudadB);
        }

    });
}