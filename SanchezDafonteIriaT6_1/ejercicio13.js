let queso = document.getElementById("queso");

queso.addEventListener("mouseover", ()=>{
    const topAl = Math.random() * (window.innerHeight-100);
    const leftAl = Math.random() * (window.innerWidth-100);

    queso.style.top = topAl + 'px';
    queso.style.left= leftAl + 'px';
})