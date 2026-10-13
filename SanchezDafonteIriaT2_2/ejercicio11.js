const prompt = require('prompt-sync')();

var respuesta1 = prompt("Presentador, ¿Cuál es la respuesta a la primera pregunta? ");
var respuesta2 = prompt("Presentador, ¿Cuál es la respuesta a la segunda pregunta? ");;
var respuesta3 = prompt("Presentador, ¿Cuál es la respuesta a la tercera pregunta? ");;

var pregunta1 = prompt("Concursante, ¿Cuál es la respuesta a la primera pregunta? ");
var pregunta2 = prompt("Concursante, ¿Cuál es la respuesta a la segunda pregunta? ");
var pregunta3 = prompt("Concursante, ¿Cuál es la respuesta a la tercera pregunta? ");

var res = (pregunta1 == respuesta1 && pregunta2 == respuesta2 && pregunta3 == respuesta3 && (respuesta1 == "Si" && respuesta2 == "Si" && respuesta3 == "Si"))?"Sí, sí, enhorabuena, has ganado":(pregunta1 == respuesta1 && pregunta2 == respuesta2 && pregunta3 == respuesta3 && (respuesta1 == "No" && respuesta2 == "No" && respuesta3 == "No")? "No, no, pero enhorabuena, has ganado":(pregunta1 == respuesta1 && pregunta2 == respuesta2 && pregunta3 == respuesta3)?"Enhorabuena, has ganado":"Vaya, has fallado");
console.log(res);
