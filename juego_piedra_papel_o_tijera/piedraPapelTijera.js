let eleccionPc = Math.floor(Math.random() * 3) + 1;
var nombreUsuario = prompt("Ingrese su nombre de jugador: ")
let eleccionUser = parseInt(prompt("1. piedra     2. papel    3.tijera"));
var jugada = ""

function verificarGanador (eleccionPc, eleccionUser){
    if (eleccionPc === eleccionUser) {
        alert(`EMPATE`)

    }

    else if ((eleccionUser == 1 && eleccionPc == 3) || (eleccionUser == 2 && eleccionPc == 1) || (eleccionUser == 3 && eleccionPc == 2)) {
        alert(`Ganaste`)


    }
    else {
        alert ("PC Gana ");
    }
}

function eleccion (eleccion) {
    if (eleccion == 1){
        jugada = "piedra"
    }
    else if (eleccion == 2){
        jugada = "papel"
    }
    else if (eleccion == 3){
        jugada = "tijera"
    }
    return jugada
}

alert(`PC elige ${eleccion(eleccionPc)}`)
alert(`${nombreUsuario} elige ${eleccion(eleccionUser)}`)

verificarGanador(eleccionPc,eleccionUser);





