function calcularPrecioConDescento(precio, descuento) {
  const porcentajeConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajeConDescuento) / 100;
  return precioConDescuento;
}

function btnCalcularDescuento() {
  const precioInput = document.getElementById('precio-input');
  const descuentoInput = document.getElementById('descuento-input');
  precio = precioInput.value;
  descuento = descuentoInput.value;
  const totalPagar = calcularPrecioConDescento(precio, descuento);
  const outputPrecio = document.getElementById('output-precio');
  outputPrecio.innerText = `El precio a pagar es de $${totalPagar}`;
}
