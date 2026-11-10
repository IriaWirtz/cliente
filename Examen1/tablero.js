function crearTablero(col, filas) {
    if (!Number.isInteger(col) || !Number.isInteger(filas) || !(col >= 1 && col <= 26) || !(filas >= 1 && filas <= 26)) {
        return "Error";
    }

    else {
        const tableroNuevo = new Array();
        const abecedario = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

        for (let i = 0; i < col; i++) { //controla la cantidad de arrays pequeñitos dentro del array grande
            const tableroFilas = new Array(); //crea los arrays pequeñitos dentro del grande
            for (let j = 1; j <= filas; j++) {//controla el numero de elementos dentro de cada array pequeñito
                tableroFilas.push(abecedario[i] + (j));//añade elementos al array pequeñito

            }
            tableroNuevo.push(tableroFilas);//dentro del bucle grande para cada array pequeñito finalizado se añade al grande
        }

        return tableroNuevo;
    }


}


function colocarCaballo(posicion, tablero) {

    const numero = posicion.splice(1) ;
    const letra = posicion.charAt(0) ;

   let flag = false;

     const abecedario = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    for (let i = 0; i < tablero[1].length; i++) {

        if(abecedario[i] == letra){
            flag=true;
        }
        
    }

     if (!(numero <= tablero.length) || !flag) {
            return "Fuera de rango";
        }


}




