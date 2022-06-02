const lista1 = [
  100, 200, 500, 600, 500, 400, 20, 600, 700, 700, 800, 400000000,
];
const mitadLista = parseInt(lista1.length / 2);
function esPar(numerito) {
  if (numerito % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
let mediana;

if (esPar(lista1.length)) {
  const elemento1 = lista1[mitadLista];
  const elemento2 = lista1[mitadLista - 1];
  mediana = (elemento1 + elemento2) / 2;
} else {
  mediana = lista1[mitadLista];
}
