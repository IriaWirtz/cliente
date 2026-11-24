const botonAZ = document.getElementById("az");
const botonZA = document.getElementById("za");
let lista = document.getElementById("nombres");

botonAZ.addEventListener("click", ()=>{
   const array =  [...lista.children];
   array.sort((a,b) => a.textContent.localeCompare(b.textContent));

   for(nom of array){
    lista.append(nom);
   }
});

botonZA.addEventListener("click", ()=>{
   const array =  [...lista.children];
   array.sort((a,b) => b.textContent.localeCompare(a.textContent));
    
   for(nom of array){
    lista.append(nom);
   }
});

