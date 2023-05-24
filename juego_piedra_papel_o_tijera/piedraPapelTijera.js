let eleccionPc = Math.floor(Math.random() * 3) + 1;
let nombreUsuario = prompt("Ingrese su nombre de jugador: ")
let eleccionUser = prompt("1. piedra     2. papel    3.tijera");

eleccionPc = parseInt(eleccionPc);

eleccionUser = parseInt(eleccionUser);


if (eleccionPc == 1 && eleccionUser == 2){
    alert(`PC elije: Piedra`)
    alert(`${nombreUsuario} elije: Papel`)
    alert(`${nombreUsuario} Gana`)


}


else if (eleccionPc == 3 && eleccionUser == 2 )  {
    alert(`PC elije: Tijera`)
    alert(`${nombreUsuario} elije: Papel`)
    alert(`PC gana`)

}

else if (eleccionPc == 2 && eleccionUser == 2 )  {
    alert(`PC elije: Papel`)
    alert(`${nombreUsuario} elije: Papel`)
    alert(`Empate`)

}

else if (eleccionPc == 2 && eleccionUser == 2 )  {
    alert(`PC elije: Papel`)
    alert(`${nombreUsuario} elije: Papel`)
    alert(`Empate`)

}



