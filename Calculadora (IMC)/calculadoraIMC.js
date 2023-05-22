// Calculadora de IMC (Índice de Masa Corporal)
// Crea una función en JavaScript que calcule el IMC de una persona. La función debe recibir dos parámetros: peso (en kilogramos) y altura (en metros). Debes calcular el IMC utilizando la fórmula: IMC = peso / (altura * altura). Luego, utiliza condicionales para mostrar un mensaje que indique en qué rango de IMC se encuentra la persona (por ejemplo, "Bajo peso", "Peso normal", "Sobrepeso", "Obesidad").

function calcularImc (peso, altura) {
   let imc = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura))


    return imc
}

let peso = prompt("Ingrese su peso en Kg")
let altura = prompt("Ingrese su altura en mts")

let indice = calcularImc(peso, altura)

if (indice < 18.5){
    document.write(`Su imc es ${indice.toFixed(2)}, ud tiene peso bajo 😢`)
}

else if (indice >= 18.5 && indice < 25){
    document.write(`Su imc es ${indice.toFixed(2)}, ud tiene peso normal 😀`)
}

else if (indice >= 25 && indice < 30){
    document.write(`Su imc es ${indice.toFixed(2)}, ud tiene sobrepeso 😟`)
}

else if (indice >= 30 && indice < 35){
    document.write(`Su imc es ${indice.toFixed(2)}, ud tiene Obesidad tipo 1 😨`)
}

else if (indice >= 35 && indice < 40){
    document.write(`Su imc es ${indice.toFixed(2)}, ud tiene Obesidad tipo 2 😱`)
}

else if (indice >= 40){
    document.write(`Su imc es ${indice.toFixed(2)}, ud tiene Obesidad tipo 3 ☠`)
}




