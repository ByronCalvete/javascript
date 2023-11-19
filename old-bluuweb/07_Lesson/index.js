// // Burbujeo (bubbling) y la captura --> Burbujeo (false) se propaga desde el elemento hijo hasta el padre y la fase decaptura (true) se propaga desde el padre hasta el hijo
// const father = document.querySelector(".border-primary");
// const son = document.querySelector(".border-secundary");
// const grandson = document.querySelector(".border-danger");

// father.addEventListener(
// 	"click",
// 	() => {
// 		console.log("father click");
// 	},
// 	true
// );

// son.addEventListener(
// 	"click",
// 	() => {
// 		console.log("son click");
// 	},
// 	true
// );

// grandson.addEventListener(
// 	"click",
// 	() => {
// 		console.log("grandson click");
// 	},
// 	true
// );

// // stopPropagation -> evita la propagación adicional del evento actual en las fases de captura y bubbling
// const boxes = document.querySelectorAll(".border");

// boxes.forEach((box) => {
// 	box.addEventListener("click", (e) => {
// 		e.stopPropagation();
// 		console.log("click");
// 	});
// });

// // prevenDefault -> cancela el evento si este es cancelable, sin detener el resto del funcionamiento del evento, es decir, puede ser llamado de nuevo
// const myForm = document.querySelector("form");

// myForm.addEventListener("submit", (e) => {
// 	e.preventDefault();
// 	console.log("click");
// });

// // Delegación de eventos
// const container = document.querySelector(".container");

// container.addEventListener("click", (e) => {
// 	// document.addEventListener("click", (e) => { --> other way if container doesn't exists. document represents all DOM
// 	if (e.target.id === "father") {
// 		console.log("click in father");
// 	}

// 	if (e.target.matches(".border-secondary")) {
// 		console.log("click in son");
// 	}

// 	if (e.target.dataset.div === "divGrandson") {
// 		console.log("click in grandson");
// 	}
// });
