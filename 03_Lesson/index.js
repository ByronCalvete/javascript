// // template string
// let nombreUsuario = 'Byron';
// let estado = true;

// console.log(`Bienvenido ${nombreUsuario}`); // Byron
// console.log(`Bienvenido ${nombreUsuario.toUpperCase()}`); // BYRON

// console.log(`${estado ? 'online' : 'offline'}`); // We can use ternary operator

// // Difference between var vs let vs const
// Var
// var nombreUsuario = 'Byron';
// var nombreUsuario = 'Javier';

// console.log(nombreUsuario); // Javier

// let
// let nombreUsuario = 'Byron';
// let nombreUsuario = 'Javier';

// console.log(nombreUsuario); // SyntaxError: Identifier 'nombre de usuario' has already been declared
// let nombreUsuario = 'Byron';
// nombreUsuario = 'Javier';

// console.log(nombreUsuario); // Podemos reasignar o sobreescribir el valor de la variable

// // Scopes
// First with var:
// var estado = true;

// if (estado) {
// 	console.log('Entró al if ✌🏼');
// 	var estado = false;
// 	console.log(estado); // false
// }

// console.log(estado); // false
// Second with let:
// let estado = true;

// if (estado) {
// 	console.log('Entró al if ✌🏼');
// 	let estado = false;
// 	console.log(estado); // false
// }

// console.log(estado); // true

// Example with for implementation
// for (let i = 0; i < 5; i++) {
// 	console.log(i); // 0 1 2 3 4
// }

// console.log(i); // Uncaight ReferenceError: i is not defined

// // variables with const
// First case:
// const estado = true;
// const estado = false;

// console.log(estado); // Uncaught SyntaxError: Indentifier 'estado' has already been declared

// Second case:
// const estado = true;
// estado = false;

// console.log(estado); // Uncaught TypeError: Assignment to constant variable

// Third case
// for (const i = 0; i < 5; i++) {
// 	console.log(i); // 0, but Uncaguht TypeError: Assignment to constant variable
// }

// Fourth case
// const estado = true;

// if (estado) {
// 	const estado = false;
// 	console.log(estado); // false
// }

// console.log(estado); // true

// // Array vs const
// const fruits = [];
// fruits[0] = 'sandía';

// console.log(fruits); // const in an array might be mutable*

// // Array (push, pop, shift, unshift)
// push
// const fruits = ['sandía', 'pera'];

// fruits.push('banano');

// console.log(fruits); // Add 'banano' at the end

// unshift
// const fruits = ['sandía', 'pera'];

// fruits.unshift('banano');

// console.log(fruits); // Add 'banano' at the beginning

// pop
// const fruits = ['sandía', 'pera'];

// fruits.pop();
// const eliminatedFruit = gruits.pop(); // returns eliminated fruit

// console.log(fruits); // delete the last element of the array

// shift
// const fruits = ['sandía', 'pera'];

// fruits.shift();

// console.log(fruits); // delete the first element of the array

// // Simple - Shopping cart
// const fruits = [];

// const fruit = prompt('Feria Market, ¿qué fruta desea comprar?');

// fruits.push(fruit);

// while (confirm('Desea agregar otro elemento al carrito?')) {
// 	const fruit = prompt('Qué fruta desea comprar?');
// 	fruits.push(fruit);
// }

// console.log(`Compaste:`);
// for (const fruit in fruits) {
// 	console.log(fruits[fruit]);
// }

// // Anonymous functions -> you can onlyy call it after the declaration line
// Función declarativa
// function numeroAleatorio(min, max) {
// 	return Math.floor(Math.random() * (max - min)) + min;
// }

// console.log(numeroAleatorio(1, 11)); // Están disponibles en tiempo de ejecución. Hoisting

// // Named functions -> can be invoked before declaration.
// const numAzar = function (min, max) {
// 	return Math.floor(Math.random() * (max - min)) + min;
// };

// console.log(numAzar(5, 16)); // Aseguramos que se leen en orden lógico

// // Arrow functions
// First way;
// const azarFlecha = (min, max) => {
// 	return Math.floor(Math.random() * (max - min) + min);
// };

//Second way:
// const azarFlecha = (min, max) => Math.floor(Math.random() * (max - min) + min);

// Third way:
// const azarFlecha = (
// 	min = 10,
// 	max = 100 // Parámetros por defecto
// ) => Math.floor(Math.random() * (max - min) + min);

// console.log(azarFlecha(1, 11));

// // Arrow & forEach()
// const fruits = ['manzana', 'pera', 'banano'];

// fruits.forEach((fruit) => console.log(fruit));
