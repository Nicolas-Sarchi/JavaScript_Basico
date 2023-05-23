let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

while (true) {
  var numeroIngresado = prompt("Ingresa un número entre 1 y 100:");

  if (numeroIngresado == null) {
    break;
  }

  numeroIngresado = parseInt(numeroIngresado);

  if (isNaN(numeroIngresado)) {
    alert("Debes ingresar un número válido.");
    continue;
  }

  intentos++;
  if (numeroIngresado > 100 || numeroIngresado <0) {
    alert("Numero fuera de rango, Ingresa un número válido")
    continue
  }
  if (numeroIngresado < numeroAleatorio) {
    alert("El número ingresado es menor que el nùmero a adivinar.");
  } else if (numeroIngresado > numeroAleatorio) {
    alert("El número ingresado es mayor que el nùmero a adivinar.");
  } else {
    alert("¡Felicidades! Adivinaste el número en " + intentos + " intentos.");
    break;
  }
}