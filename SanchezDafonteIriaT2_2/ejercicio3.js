const prompt = require('prompt-sync')();
var primera_pregunta = prompt("¿Estás registrado? ");
var segunda_pregunta = prompt("¿Has pagado la entrada? ");
var tercera_pregunta = prompt("Tienes una identificacion válida? ");

var res = (primera_pregunta == "Si" && segunda_pregunta == "Si" && tercera_pregunta == "Si") ? "Torno abierto" : "Torno cerrado";
console.log(res);