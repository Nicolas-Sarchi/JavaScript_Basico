

function validarContrasena(contrasena) {
  
  if (contrasena.length < 8) {
    return "Contraseña Insegura";
  }

  var tieneMayuscula = /[A-Z]/.test(contrasena);
  if (!tieneMayuscula) {
    return  "Contraseña Insegura";
;
  }

  var tieneMinuscula = /[a-z]/.test(contrasena);
  if (!tieneMinuscula) {
    return     "Contraseña Insegura";
;
  }

  var tieneNumero = /\d/.test(contrasena);
  if (!tieneNumero) {
    return "Contraseña Insegura";
;
  }

  return "Contraseña segura";
}

var contrasena1 = prompt("Contraseña que quiere validar");

document.write(validarContrasena(contrasena1)+"\n"); 
