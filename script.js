let numero = prompt("Ingrese un numero (Consigna 1)");
function esParOImpar(numero) {
  if (numero % 2 === 0) {
    console.log("El número es par.");
  } else {
    console.log("El número es impar.");
  }
}

esParOImpar(numero);

let num1 = prompt("Ingrese el primer numero (Consigna 2)");
let num2 = prompt("Ingrese el segundo numero (Consigna 2)");

function compararNumeros(num1, num2) {
  if (num1 > num2) {
    console.log("El número " + num1 + " es mayor que " + num2 + ".");
  } else if (num2 > num1) {
    console.log("El número " + num2 + " es mayor que " + num1 + ".");
  } else {
    console.log("Ambos números son iguales.");
  }
}

compararNumeros(num1, num2);

let numero3 = prompt("Ingrese un numero (Consigna 3)");

function esMultiploDeCinco(numero3) {
  if (numero3 % 5 === 0) {
    console.log("El número es múltiplo de 5.");
  } else {
    console.log("El número no es múltiplo de 5.");
  }
}

esMultiploDeCinco(numero3);

let numero4 = prompt("Ingrese un numero (Consigna 4)");

function imprimirNumerosHasta(numero4) {
  for (let i = 0; i <= numero4; i++) {
    console.log(i);
  }
}

imprimirNumerosHasta(numero4);

let palabra = prompt("Ingrese una palabra (Consigna 5)");
let cantidad = prompt("Ingrese una cantidad (Consigna 5)");

function imprimirPalabraCantidadVeces(palabra, cantidad) {
  for (let i = 0; i < cantidad; i++) {
    console.log(palabra);
  }
}

imprimirPalabraCantidadVeces(palabra, cantidad);

function mostrarArrayConsola() {
  let elementos = prompt("Ingresa los elementos del array (Consigna 6)");
  let array = elementos.split(",");

  console.log("Los elementos del array son:");
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

mostrarArrayConsola();

// Consigna 7

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function mostrarArraySinQuintoElemento(array) {
  for (let i = 0; i < array.length; i++) {
    if (i !== 4) {
      console.log(array[i]);
    }
  }
}

mostrarArraySinQuintoElemento(numeros);

let numeros8 = [1, 2, 3, 4, 5];
let multiplicador = prompt(
  "Ingrese por cuanto quiere multiplicar (Consigna 8)"
);

function multiplicarArrayPorNumero(array, numeros8) {
  for (let i = 0; i < array.length; i++) {
    let resultado = array[i] * numeros8;
    console.log(resultado);
  }
}

multiplicarArrayPorNumero(numeros8, multiplicador);
