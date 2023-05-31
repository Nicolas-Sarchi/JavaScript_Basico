// **Filtrar palabras por longitud**: Escribe una función que tome una matriz de palabras y un número entero `n`, y devuelva una nueva matriz que contenga solo las palabras con una longitud mayor o igual a `n`.


let palabras = [];
let palabra = prompt("ingrese una palabra");

while (palabra.length > 0) {
    palabras.push(palabra);
    palabra = prompt("ingrese una palabra");
}

let numeroLetras = prompt("Ingrese lalongitud de las palabras que desea filtrar");

let filtrar = palabras.filter( palabra => palabra.length >= numeroLetras);

if (filtrar.length === 0) {
    alert("ninguna palabra coincide con el criterio de bùsqueda")
}

else{
    alert(`Las palabras con una longitud mayor o igual a ${numeroLetras} son ${filter}`);
}
