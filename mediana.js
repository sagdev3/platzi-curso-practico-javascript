function calcularMediaAritmeticaPar(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });
  const promedioList = sumaLista / lista.length;
  return promedioList;
}

function medianaAritmetica(lista) {
  const mitadLista = parseInt(lista.length / 2);

  function esPar(numerito) {
    if (numerito % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
  let mediana;

  if (esPar(lista.length)) {
    const elemento1 = lista1[mitadLista];
    const elemento2 = lista1[mitadLista - 1];
    const promedioElemnto1y2 = calcularMediaAritmeticaPar([
      elemento1,
      elemento2,
    ]);
    mediana = promedioElemnto1y2;
    return mediana;
  } else {
    mediana = lista[mitadLista];
    return mediana;
  }
}
const lista1 = [200, 100, 1000, 750, 500, 400000000];
lista1.sort((a, b) => a - b);
console.log(medianaAritmetica(lista1));
