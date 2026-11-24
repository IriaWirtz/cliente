const productos = document.querySelectorAll("#productos button");
let lista = document.getElementById("carrito");
let total = document.getElementById("total");
total.textContent = "Total: 0.00 €"
let totalCero = 0.00;

productos.forEach((producto) =>{
    producto.addEventListener("click", ()=>{
        const elemento = document.createElement("li");
       

        lista.append(elemento);
        const precio = Number(producto.dataset.precio).toFixed(2);
         elemento.textContent =producto.textContent + ": " + Number(precio).toFixed(2) + " €" ;
        totalCero= (Number (totalCero) + Number(precio)).toFixed(2);
        total.textContent = "Total: " + totalCero + " €"

    })
})
