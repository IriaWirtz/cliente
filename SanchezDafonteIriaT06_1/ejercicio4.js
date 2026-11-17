const navegador = navigator.userAgent;
const lista = document.querySelector("#info")
const idioma = navigator.language;
var cookies = navigator.cookieEnabled;
let conexion = navigator.onLine;

if(cookies == true){
    cookies = "sí";
}

else cookies = "no";

if(conexion == true){
    conexion= "online";
}

else conexion = "offline";

const primerElemento = document.createElement('li');
primerElemento.textContent = `Navegador: ${navegador}`;
const secElemento = document.createElement('li');
secElemento.textContent= `Idioma: ${idioma}`;
const terElemento = document.createElement('li');
terElemento.textContent= `Cookies habilitadas: ${cookies}`;
const cuartElemento = document.createElement('li');
cuartElemento.textContent= `Conexión: ${conexion}`;

lista.append(primerElemento);
lista.append(secElemento);
lista.append(terElemento);
lista.append(cuartElemento);



