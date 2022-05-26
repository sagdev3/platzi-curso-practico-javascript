// Codigo del cuadrado

function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return Math.pow(lado, 2);
}

// Codigo del Triangulo

function perimetoTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

//Codigo circulo

const PI = Math.PI;
function diametroCirculo(radio) {
  return radio * 2;
}
function perimeroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}
function areaCirculo(radio) {
  return Math.pow(radio, 2) * PI;
}

function calcularPerimetroCuadrado() {
  const input = document.getElementById('input-cuadrado');
  const ladosCuadrado = input.value;
  const perimetro = perimetroCuadrado(ladosCuadrado);
  const resultado = document.getElementById('result-cuadrado');
  resultado.value = `${perimetro} cm`;
}

function calcularAreaCuadrado() {
  const input = document.getElementById('input-cuadrado');
  const ladosCuadrado = input.value;
  const area = areaCuadrado(ladosCuadrado);
  const resultado = document.getElementById('result-cuadrado');
  resultado.value = `${area} cm^2`;
}

function calcularPerimetroTriangulo() {
  const inputL1 = document.getElementById('lado1-triangulo');
  const inputL2 = document.getElementById('lado2-triangulo');
  const inputB = document.getElementById('base-triangulo');
  const lado1 = parseInt(inputL1.value);
  const lado2 = parseInt(inputL2.value);
  const base = parseInt(inputB.value);
  const perimetro = perimetoTriangulo(lado1, lado2, base);

  const resultado = document.getElementById('result-triangulo');
  resultado.value = `${perimetro} cm`;
}
function calcularAreaTriangulo() {
  const inputA = document.getElementById('altura-triangulo');
  const inputB = document.getElementById('base-triangulo');
  const base = parseInt(inputB.value);
  const altura = parseInt(inputA.value);
  const area = areaTriangulo(base, altura);
  const resultado = document.getElementById('result-triangulo');
  resultado.value = `${area} cm^2`;
}
function calcularDametroCirculo() {
  const inputRadio = document.getElementById('input-radio');
  const radio = parseInt(inputRadio.value);
  const diametro = diametroCirculo(radio);
  const resultado = document.getElementById('result-circulo');
  resultado.value = `${diametro} cm`;
}
function calcularPerimetroCirculo() {
  const inputRadio = document.getElementById('input-radio');
  const radio = parseInt(inputRadio.value);
  const perimetro = perimeroCirculo(radio);
  const resultado = document.getElementById('result-circulo');
  resultado.value = `${perimetro} cm`;
}
function calcularAreaCirculo() {
  const inputRadio = document.getElementById('input-radio');
  const radio = parseInt(inputRadio.value);
  const area = areaCirculo(radio);
  const resultado = document.getElementById('result-circulo');
  resultado.value = `${area} cm^2`;
}
