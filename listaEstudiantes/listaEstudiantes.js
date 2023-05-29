/* Ejercicio 1: Gestión de estudiantes
Crea un programa que permita ingresar los nombres de estudiantes y los almacene en un array. Luego, implementa las siguientes funcionalidades utilizando métodos de arrays:
- Mostrar la cantidad total de estudiantes.
- Mostrar el primer estudiante de la lista.
- Mostrar el último estudiante de la lista.
- Agregar un nuevo estudiante al final de la lista.
- Remover el primer estudiante de la lista.
- Ordenar los estudiantes alfabéticamente. `
 */


let estudiantes = [];

function mostrarCantidadEstudiantes() {
    let cantidadEstudiantes = estudiantes.length;
    mostrarResultado("La cantidad total de estudiantes es: " + cantidadEstudiantes);
}

function mostrarPrimerEstudiante() {
    let primerEstudiante = estudiantes[0];
    mostrarResultado("El primer estudiante de la lista es: " + primerEstudiante);
}

function mostrarUltimoEstudiante() {
    let ultimoEstudiante = estudiantes[estudiantes.length - 1];
    mostrarResultado("El último estudiante de la lista es: " + ultimoEstudiante);
}

function agregarEstudiante() {
    let nuevoEstudiante = prompt("Ingrese el nombre del nuevo estudiante:");
    estudiantes.push(nuevoEstudiante);
    mostrarResultado("El nuevo estudiante ha sido agregado.");
}

function removerPrimerEstudiante() {
    let estudianteRemovido = estudiantes.shift();
    mostrarResultado("El estudiante removido es: " + estudianteRemovido);
}

function ordenarEstudiantes() {
    estudiantes.sort();
    mostrarResultado("Los estudiantes ordenados alfabéticamente son: " + estudiantes.join(", "));
}

function mostrarResultado(resultado) {
    document.getElementById("menuPrincipal").style.display = "none";
    document.getElementById("resultado").innerHTML = resultado;
}

function volverMenuPrincipal() {
    document.getElementById("menuPrincipal").style.display = "block";
    document.getElementById("resultado").innerHTML = "";
}


