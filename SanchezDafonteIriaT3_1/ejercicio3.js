const array = ["a", "a", "i", "a", "e", "i", "a"];
const lista=[];

 let indice = array.indexOf("a");
  while (indice !== -1) {
    lista.push(indice+1);
    indice = array.indexOf("a", indice + 1);
  }


console.log(lista);