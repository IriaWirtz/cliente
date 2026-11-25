const anadir = document.getElementById("anadir");
const lista = document.getElementById("lista");
const nueva = document.getElementById("nueva");
  const botonBorrar = document.querySelectorAll("#borrarID");


anadir.addEventListener("click", ()=>{
   const borrar = document.createElement("button");
    const elemento = document.createElement("li");
    borrar.setAttribute("id", "borrarID");
   

    if(nueva.value.trim()=== "" || nueva.value === null){

    }

    else {
        borrar.textContent = "Borrar";
        elemento.textContent = nueva.value.trim();
        elemento.append(borrar);
        
         lista.append(elemento);
    }
    
   
})


     for(let boton of botonBorrar){

    boton.addEventListener("click",()=>{
    const elBorrar = boton.closest("li");
    lista.remove(elBorrar);
    })}





   

