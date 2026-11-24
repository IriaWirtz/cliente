const anadir = document.getElementById("anadir");
const lista = document.getElementById("lista");
const nueva = document.getElementById("nueva");
const botonBorrar = document.querySelectorAll("button");


anadir.addEventListener("click", ()=>{
   const borrar = document.createElement("button");
    const elemento = document.createElement("li");

    if(nueva.value.trim()=== "" || nueva.value === null){

    }

    else {
        borrar.textContent = "Borrar";
        elemento.textContent = nueva.value.trim();
        elemento.append(borrar);
        
         lista.append(elemento);
    }
    

    borrar.addEventListener("click",()=>{
    const elBorrar = borrar.closest("li");
    lista.remove(elBorrar);
})


   
})

