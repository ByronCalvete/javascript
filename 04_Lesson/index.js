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
