const list1 = [100, 200, 300, 500];

function calcularMediaAritmetica(lista) {
  //   let sumalista = 0;

  //   for (let i = 0; i < lista.length; i++) {
  //     sumalista = sumalista + lista[i];
  //   }

  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });
  const promedioList = sumaLista / lista.length;
  return promedioList;
}
