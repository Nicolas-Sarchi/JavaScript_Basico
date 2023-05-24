
/* 
Verificador de año bisiesto
Crea una función en JavaScript que verifique si un año es bisiesto o no. La función debe recibir un año como parámetro y utilizar condicionales para determinar si cumple con las reglas para ser considerado bisiesto. Un año es bisiesto si es divisible por 4, excepto si es divisible por 100 pero no por 400. La función debe retornar true si el año es bisiesto y false si no lo es. */

function esBisiesto (anho) {
    if (anho % 4 == 0){
        if (anho % 100 == 0){
            if (anho % 400 == 0){
                return true
            }
            else{
                return false
            }
        }
        else{
            return true
        }
    }

    else{
        return false
    }

}



let anho = prompt("Ingrese el año que quiere verificar")

let verify = esBisiesto(parseInt(anho))

document.write(`<h1 style = color : #efefef; >Su año es bisiesto ? : ${verify}</h1>`)