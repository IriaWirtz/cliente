
let reloj = new Date();
let texto = document.querySelector("#reloj");
 let horas =  reloj.getHours().toString().padStart(2,0);
let minutos = reloj.getMinutes().toString().padStart(2,0);
let segundos = reloj.getSeconds().toString().padStart(2,0);
  texto.textContent = `${horas}:${minutos}:${segundos}`;
const id = setInterval(() => {
    let reloj = new Date();
 let horas =  reloj.getHours().toString().padStart(2,0);
let minutos = reloj.getMinutes().toString().padStart(2,0);
let segundos = reloj.getSeconds().toString().padStart(2,0);
  texto.textContent = `${horas}:${minutos}:${segundos}`;
}, 1000);


document.querySelector("#detener").onclick = () =>{
    clearInterval(id);
}