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

    const letra = posicion.charAt(0);
    const numero = Number(posicion.slice(1));

     const abecedario = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


     if (numero > tablero[0].length || numero < 1) {
            return "Fuera de rango";
        }

      else {for (let i = 0; i < tablero.length; i++) {
        
        if(abecedario[i] == letra){
            let letraMover1 = abecedario[i-2];//dos letras a la izq
            let letraMover2 = abecedario[i+2];//dos letras a la drc
            let numeroMover1 = numero-2; //dos numeros abajo
            let numeroMover2 = numero+2; //dos numeros arriba

            const pos1 = letraMover1 + (numero-1);// -1  y +1 para el movimiento en L en cada caso
            const pos2 = letraMover1 + (numero+1);
            const pos3 = letraMover2 + (numero-1);
            const pos4 = letraMover2 + (numero+1);
            const pos5=abecedario[i-1] + numeroMover1;
            const pos6=abecedario[i+1] + numeroMover1;
            const pos7=abecedario[i-1] + numeroMover2;
            const pos8=abecedario[i+1] + numeroMover2;


            const movimientos = [pos1, pos2, pos5, pos7, pos6, pos8, pos3, pos4]; //estan desordenados para que las letras esten en orden alfabetico



            return movimientos;
        }

    }

        
    }
    return "Fuera de rango";   


}


const tablero = crearTablero(8,8);

console.log(tablero);

const caballo = colocarCaballo('e4', tablero);

console.log(caballo);





