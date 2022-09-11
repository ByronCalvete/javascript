// Arrays basics
let frutas = ['banano', 'manzana', 'pera', 10];
// console.log(frutas);
// console.log(frutas.length);
// console.log(frutas[0]); // banano
// console.log(frutas[1]); // manzana
// console.log(frutas[2]); // pera
// console.log(frutas[3]); // 10
// console.log(frutas[4]); // undefined

// // for statement
// for (let i = 0; i < frutas.length; i++) {
// 	console.log(frutas[i]);
// }

// // for of statement
// for (let fruta of frutas) {
// 	console.log(fruta);
// }

// let nombre = 'Byron';

// for (let letra of nombre) {
// 	console.log(letra);
// }

// // Funciones
// // Funciones sin retorno
// function saludar(nombreUsuario) {
// 	console.log(`Bienvenido ${nombreUsuario}`);
// }

// saludar('Byron');

// // Funciones con retorno
// function saludar(nombreUsuario) {
// 	return `Bienvenido ${nombreUsuario}`;
// }

// console.log(saludar('Byron'));

// Sumar con JavaScript
function sumar(n1, n2) {
	return n1 + n2;
}

let numUno = parseInt(prompt('Ingrese el primer número'));
let numDos = parseInt(prompt('Ingrese el segundo número'));

console.log(sumar(numUno, numDos));
