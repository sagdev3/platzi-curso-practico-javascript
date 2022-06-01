let resultadosHTML = '';
function calcularPrecioConDescento(precio, descuento) {
  const porcentajeConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajeConDescuento) / 100;
  resultadosHTML = `
  <div>
    <p>El precio es de: $${precio}</p>
    <p>El porcentaje del descuento es de: ${descuento}%</p>
    <p>El descuento a restar es: $${porcentajeConDescuento}
    `;
  return precioConDescuento;
}

function btnCalcularDescuento() {
  const precioInput = document.getElementById('precio-input');
  const descuentoInput = document.getElementById('descuento-select');
  const precio = precioInput.value;
  const descuento = descuentoInput.value;
  let valorDescuento;
  switch (descuento) {
    case 'python':
      valorDescuento = 15;
      break;
    case 'javascript':
      valorDescuento = 45;
      break;
    case 'css':
      valorDescuento = 25;
      break;
    case 'html':
      valorDescuento = 5;
      break;
  }
  const totalPagar = calcularPrecioConDescento(precio, valorDescuento);
  resultadosHTML += `
        <p>El precio a pagar es de $${totalPagar}</p>
    </div>
  `;
  const sectionResultado = document.getElementById('section-resultado');
  sectionResultado.innerHTML = resultadosHTML;
  //   const outputPrecio = document.getElementById('output-precio');
  //   outputPrecio.innerText = `El precio a pagar es de $${descuento}`;
}
