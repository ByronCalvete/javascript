// // Object Literals
// const dog = {
// 	name: 'Rocky',
// 	sleep: true,
// 	age: 4,
// 	enemies: ['water', 'cats'],
// };

// console.log(dog); // All object
// console.log(dog.name); // Rocky
// console.log(dog['enemies']); // ['water', 'cats']

// // CRUD (Create, Read, Update, Delete)
// const dog = {
// 	name: 'Rocky',
// 	sleep: true,
// 	age: 4,
// 	enemies: ['water', 'cats'],
// };

// dog.color = 'black'; // Create

// dog.age = 3; // Update

// delete dog.sleep; // Delete

// console.log(dog);

// // hasOwnProperty
// const dog = {
// 	name: 'Rocky',
// 	sleep: true,
// 	age: 4,
// 	enemies: ['water', 'cats'],
// };

// console.log(dog.hasOwnProperty('name')); // true
// console.log(dog.hasOwnProperty('lastName')); // false

// // Objetos anidados
// const dog = {
// 	name: 'Rocky',
// 	sleep: true,
// 	age: 4,
// 	enemies: ['water', 'cats'],
// 	others: {
// 		friends: ['sarabi', 'neron'],
// 		favorites: {
// 			food: {
// 				cold: 'fish',
// 				hot: 'chicken',
// 			},
// 		},
// 	},
// };

// console.log(dog.others.favorites.food.cold); // fish
// console.log(dog.others.friends); // ['sarabi', 'neron'];

// // Optional chaining ?.
// const dog = {
// 	name: 'Rocky',
// 	sleep: true,
// 	age: 4,
// 	enemies: ['water', 'cats'],
// 	others: {
// 		friends: ['sarabi', 'neron'],
// 		favorites: {
// 			food: {
// 				cold: 'fish',
// 				hot: 'chicken',
// 			},
// 		},
// 	},
// };

// console.log(dog.others.favorite?.food.cold);

// // Properties, methods and this
// const friends = ['Byron', 'Javier'];
// console.log(friends.length); // Property

// const name = 'Byron';

// const dog = {
// 	name: 'Rocky',
// 	sleep: true,
// 	age: 4,
// 	enemies: ['water', 'cats'],
// 	eat(food) {
// 		// console.log('Chao', this); // Hace referencia al objeto contexto de JavaScript en el cual se está ejecutando el código actual
// 		console.log(`${this.name} is eating ${food}`);
// 	},
// 	// eat2: (food) => {
// 	// 	console.log(`${name} is eating ${food}`); // No se deben utilizar las arraow functions como métodos
// 	// },
// 	myEnemies() {
// 		this.enemies.forEach((enemy) => console.log(enemy)); // Sólo podemos utilizar arrow functions en el interior de los métodos, no como un método en si
// 	},
// };

// dog.eat('chicken');
// dog.myEnemies();

// // Recorrer un objeto (for in)
// const dog = {
// 	name: 'Rocky',
// 	sleep: true,
// 	age: 4,
// 	enemies: ['water', 'cats'],
// 	eat(food) {
// 		console.log(`${this.name} is eating ${food}`);
// 	},
// };

// for (let property in dog) {
// 	console.log(dog[property]);
// }

// // Object.values()
// const dog = {
// 	name: 'Rocky',
// 	sleep: true,
// 	age: 4,
// 	enemies: ['water', 'cats'],
// };

// console.log(Object.values(dog)); // array of values
// Object.values(dog).forEach((item) => console.log(item)); // every property of array

// // Object.entries()
// const dog = {
// 	name: 'Rocky',
// 	sleep: true,
// 	age: 4,
// 	enemies: ['water', 'cats'],
// };

// for (const [key, value] of Object.entries(dog)) {
// 	console.log(`${key}: ${value}`); // Returns pairs key value
// }

// // Object.keys()
// const dog = {
// 	name: 'Rocky',
// 	sleep: true,
// 	age: 4,
// 	enemies: ['water', 'cats'],
// };

// console.log(Object.keys(dog)); // Array of keys
// Object.keys(dog).forEach((item) => console.log(item)); // every property of array

// // Object.getOwnPropertyNames()
// const dog = {
// 	name: 'Rocky',
// 	sleep: true,
// 	age: 4,
// 	enemies: ['water', 'cats'],
// };

// console.log(Object.getOwnPropertyNames(dog)); // Return an array with the properties of the object

// // Destructuring Objects
// const dog = {
// 	name: 'Rocky',
// 	sleep: true,
// 	age: 4,
// 	enemies: ['water', 'cats'],
// 	others: {
// 		friends: ['sarabi', 'neron'],
// 		favorites: {
// 			food: {
// 				cold: 'fish',
// 				hot: 'chicken',
// 			},
// 		},
// 	},
// };

// // const nameDog = dog.name;

// const { name: nameDog = 'Papá lindo' } = dog; // nameDog is an alias for name property and 'Papá lindo is a default name

// console.log(nameDog); // Rocky

// const {
// 	others: { friends },
// } = dog;

// const [friend1, friend2] = friends;

// console.log(friends);
// console.log(friend1);

// // Getter and Setter - A little approach
// const dog = {
// 	name: 'Rocky',
// 	sleep: true,
// 	age: 4,
// 	enemies: ['water', 'cats'],
// 	get nameUpperCase() {
// 		return this.name.toUpperCase();
// 	},
// 	set addEnemy(enemy) {
// 		this.enemies.push(enemy);
// 	},
// };

// console.log(dog.nameUpperCase);

// dog.addEnemy = 'soup';

// console.log(dog);

// // por valor vs por referencia
// let a = 'hola';

// let b = a;

// a = 'chao';

// console.log(b); // 'hola' -> es una asignación por valor

// let a = ['hola'];
// let b = a;

// a.push('chao');

// console.log(b); // ['hola', 'chao'] -> es una asignación por referencia
