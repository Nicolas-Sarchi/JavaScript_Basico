

let precioInicial = prompt("Ingrese el precio inicial de su producto")

let descuento = prompt("Ingrese el descuento de su producto")

let precioFinal = precioInicial - ((parseInt(precioInicial) * parseFloat(descuento)) / 100)


document.write(`su producto con valor $${precioInicial}, con un ${descuento}% de descuento ahora vale $${precioFinal}`)