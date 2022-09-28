// // Array Methods
// // map method
// const fruits = ["🍌", "🍓", "🍏", "🍇"];

// const newArrayFruits = fruits.map((fruit) => fruit);
// console.log(newArrayFruits); // ['🍌', '🍓', '🍏', '🍇']

// const users = [
// 	{ name: "John", age: 34 },
// 	{ name: "Amy", age: 20 },
// 	{ name: "Rocky", age: 4 },
// ];

// const names = users.map((user) => user.name);
// console.log(names); // ['John', 'Amy', 'Rocky']

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const squareNumbers = numbers.map((number) => number * number);
// console.log(squareNumbers); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

// // filter method
// const users = [
// 	{ uid: 1, name: "John", age: 34 },
// 	{ uid: 2, name: "Amy", age: 20 },
// 	{ uid: 3, name: "Rocky", age: 4 },
// ];

// const olderUsers = users.filter((user) => user.age > 30);
// const filterUsers = users.filter((user) => user.uid !== 3);

// console.log(olderUsers); // [{ uid: 1, name: "John", age: 34 }]
// console.log(filterUsers); // [{ uid: 1, name: "John", age: 34 }, { uid: 2, name: "Amy", age: 20 }]

// // find method --> Only returns the first coincidence
// const users = [
// 	{ uid: 1, name: "John", age: 34 },
// 	{ uid: 2, name: "Amy", age: 20 },
// 	{ uid: 3, name: "Rocky", age: 4 },
// ];

// const findAmy = users.find((user) => user.uid === 2);
// console.log(findAmy); // { uid: 2, name: "Amy", age: 20 }

// const { age } = users.find((user) => user.uid === 3);
// console.log(age); // 4

// // some method --> checks if at least one element of the array meets the specified condition
// const users = [
// 	{ uid: 1, name: "John", age: 34 },
// 	{ uid: 2, name: "Amy", age: 20 },
// 	{ uid: 3, name: "Rocky", age: 4 },
// ];

// const existUser = users.some((user) => user.uid === 3);
// console.log(existUser); // true

// const existUser2 = users.some((user) => user.uid === 4);
// console.log(existUser2); // false

// // findIndex method --> returns the index of the first element that meets the specified condition otherwise hand returns -1
// const users = [
// 	{ uid: 1, name: "John", age: 34 },
// 	{ uid: 2, name: "Amy", age: 20 },
// 	{ uid: 3, name: "Rocky", age: 4 },
// ];

// const index = users.findIndex((user) => user.uid === 2);
// console.log(index); // 1

// const index2 = users.findIndex((user) => user.uid === 4);
// console.log(index2); // -1 --> this index doesn't exists

// // slice method --> returns a copy of the array. Starting from the beginning to the end (end not included)
// const arr = ["Cat", "Dog", "Tiger", "zebra"];

// const newArray = arr.slice(1, 3);
// console.log(newArray); // ['Dog', 'Tiger']

// // concat method --> Used to join two or more arrays. The method don't change the currents array, but create a new one
// const array1 = ["a", "b", "c"];
// const array2 = ["d", "e", "f"];

// const array3 = array1.concat(array2);
// console.log(array3); // ['a', 'b', 'c', 'd', 'e', 'f']

// // Spread syntax (this is an alternative to concat)
// const array1 = ["a", "b", "c"];
// const array2 = ["d", "e", "f"];

// const array3 = [...array1, ...array2];
// console.log(array3); // ['a', 'b', 'c', 'd', 'e', 'f']
