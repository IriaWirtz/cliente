const anadir = document.getElementById("anadir");
const lista = document.getElementById("lista");
const nueva = document.getElementById("nueva");


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

    borrar.addEventListener("click", ()=>{
      elemento.remove();
    })
    
   
})






   

