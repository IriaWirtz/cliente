const prompt = require('prompt-sync')();
var usuario = "admin";
var contrasena = "1234";

var user_pantalla = prompt("Dame tu nombre de usuario ");
var contrasena_pantalla = prompt("Dame la contraseña ");

var res = (user_pantalla == usuario && contrasena_pantalla == contrasena)? "Usuario autorizado" : "Usuario sin acceso";
console.log(res);