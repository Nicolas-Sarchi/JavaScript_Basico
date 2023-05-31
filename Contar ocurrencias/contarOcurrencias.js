// **Contar ocurrencias**: Escribe una función que tome una matriz de números y devuelva un objeto que muestre cuántas veces aparece cada número en la matriz.


function contarOcurrencias (array) {
    var ocurrencias = {} 

    for (let i = 1; i < array.length ; i ++){
        var elemento = array[i];
        if (ocurrencias[elemento]){
            ocurrencias[elemento]++
        }
        else {
            ocurrencias[elemento] = 1 ;
        }
    }
    return ocurrencias
}

const numeros = [1,2,3,3,4,4,55,5,5,5,5,7,89,89,0,9,8,7,5,44];

let resultado = contarOcurrencias(numeros);

console.log(resultado);