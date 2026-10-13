const prompt = require('prompt-sync')();
var largo_con = (Number) (prompt("Inserta el largo del contenedor "));
var ancho_con = (Number) (prompt("Inserta el ancho del contenedor "));
var alto_con = (Number) (prompt("Inserta el alto del contenedor "));

var largo_obj = (Number) (prompt("Inserta el alto del objeto "));
var ancho_obj = (Number) (prompt("Inserta el ancho del objeto "));
var alto_obj = (Number) (prompt("Inserta el alto del objeto "));


console.log(largo_con>=largo_obj&&ancho_con>=ancho_obj&&alto_con>=alto_obj);