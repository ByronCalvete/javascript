// // Mandar mensajes a la consola
// console.log('Hola amigos');
// console.log('Esto es un string');

// // Algunos tipos de datos, los 3 más sencillos
// console.log('20'); // String
// console.log(20); // Number
// console.log(20.6);
// console.log(2, 5); // Esto es una función. Recibe dos parámetros. Tener cuidado si queremos escribir el número 2,5
// console.log(true); //Boolean
// console.log(false);
// console.log('false');

// // Variables
// let nombreUsuario = 'Byron';
// let edadUsuario = 28;
// console.log(nombreUsuario);
// console.log(edadUsuario);

// // Concatenación
// let firstName = 'Byron';
// let lastName = 'Calvete';
// console.log('The full name is', firstName, lastName);
// console.log('The full name is ' + firstName + ' ' + lastName);
// console.log(`The full name is ${firstName} ${lastName}`);

// // Prompt - Captura de datos del usuario
// let primerNumero = parseInt(prompt('Ingrese un número'));
// let segundoNumero = parseInt(prompt('Ingrese otro número'));
// let resultado = primerNumero + segundoNumero;
// console.log(typeof resultado);
// console.log(resultado);

// // Operadores
// let sum = 10 + 20; // 30
// let substract = 10 - 20; // -10
// let multiplication = 10 * 20; // 200
// let division = 20 / 10; // 2
// let modulo = 5 % 3; // 2

// let operation = 2 * (100 / 5) + 10; // 50

// // Operadores relacionales
// let resultado2 = 10 < 20; // true
// let resultado3 = 10 > 20; // false
// let resultado4 = 10 == 20; // false
// let resultado5 = 10 == '10'; // true -> "Loose equals". En éste caso se aplica el concepto de "Coercion", que es convertir un el valor de una variable de un tipo en otro.
// let resultado6 = 10 === '10'; // false -> "Strict equals"
// let resultado7 = 10 != 10; // false
// let resultado8 = 10 !== '10'; // true

// // Operadores lógicos
// let resultado = true && true; // true -> "and" operation
// let resultado2 = true && false; // false
// let resultado3 = true && true && false; // false
// let resultado4 = false && false; // false
// let resultado5 = true || false; // true -> "or" operator
// let resultado6 = false || false; // false
// let resultado7 = !false; // true
// let resultado8 = !true; // false

// Estructuras de control
// if ( condicion ) {
//   // bloque verdadero
// } else {
//   // bloque falso
// }

// let stringUsuario = prompt('Escriba "JavaScript"');

// If statement
// if (stringUsuario === 'JavaScript') {
// 	console.log('Correcto');
// } else {
// 	console.log('Hubo un error');
// }

// let numUsuario = parseInt(prompt('Ingrese un número del 1 al 10'));

// if (numUsuario <= 10) {
// 	console.log('Perfecto!');
// } else {
// 	console.log('Upss!, el número era del 1 al 10');
// }

// // Switch statement
// let opcionUsuario = prompt(`
// Elija una opción:
// 1: Libros
// 2: Películas
// 3: Juegos
// `);

// console.log(opcionUsuario);

// switch (opcionUsuario) {
// 	case '1':
// 		console.log('Principito');
// 		break;
// 	case '2':
// 		console.log('Matrix');
// 		break;
// 	case '3':
// 		console.log('NFS');
// 		break;
// 	default:
// 		console.log('Opción no válida');
// 		break;
// }

// While statement
// let numero = 1;

// while (numero <= 10) {
// 	console.log(numero);
// 	numero = numero + 1;
// }

// console.log(`Fin numero ${numero}`);

// // Juego adivinar con JS
// // Función de un número aleatorio entre un rango determinado (mínimo incluído, máximo excluído)-> Math.floor(Math.random() * (max - min) + min);
// let numeroMaquina = Math.floor(Math.random() * (11 - 1) + 1);
// console.log(numeroMaquina);

// let vidas = 3;

// let numeroUsuario = parseInt(prompt('Adivine el número del 1 al 10'));

// while (numeroMaquina !== numeroUsuario && vidas > 1) {
// 	let mensaje =
// 		numeroMaquina > numeroUsuario ? `El número es mayor` : `El número es menor`;

// 	console.log(`Te equivocaste, ${mensaje}. Inténtalo de nuevo ✌🏼`);
// 	numeroUsuario = parseInt(prompt('Adivine el número del 1 al 10'));
// 	vidas--;
// }

// if (numeroMaquina === numeroUsuario) {
// 	console.log('Ganaste 💪🏼');
// } else {
// 	console.log('Perdiste 😔');
// }
