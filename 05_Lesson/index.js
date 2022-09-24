// // document
// console.log(document);

// console.log(document.head); // head tag
// console.log(document.title); // title of the site

// // getElementById()
// console.log(document.getElementById("tituloId"));
// console.log(document.getElementById("tituloId").textContent);
// console.log(document.getElementById("tituloId").innerHTML);

// //  script, DOMContentLoaded and defer -> Nos ayudan a que se cargue el JS cuando llamamos al script desde la etiqueta head
// document.addEventListener("DOMContentLoaded", () => {
// 	console.log(document.getElementById("tituloId"));
// 	console.log(document.getElementById("tituloId").textContent);
// 	console.log(document.getElementById("tituloId").innerHTML);
// });

// // querySelector -> Select only the first element
// console.log(document.querySelector("#tituloId"));
// console.log(document.querySelector(".tituloClass"));
// console.log(document.querySelector(".text-danger"));

// // querySelectorAll -> Select all matching elements
// console.log(document.querySelectorAll(".text-danger"));
// console.log(document.querySelectorAll(".container .text-danger")); // Like CSS selectors

// // querySelector vs getElementById
// -> El principal beneficio de usar querySelector o querySelectorAll es que podemos seleccionar elementos usando selectores CSS,
// lo que nos da una forma unidorme de manejar la selección de elemento.
// -> Si se usa una herramienta como Babel para admitir navegadores más antiguos, entonces puede ser irrelevante, ya que las funciones
// más nuevas se pueden convertir a código compatible en versiones anteriores cuando compila su script.
// -> En 800.000 selectores por segundo, querySelector es aprox. 6% más lento

// // element
// const title = document.getElementById("tituloId");

// title.textContent = "New title from CSS";
// title.style.backgroundColor = "red";
// title.style.color = "#eee";

// console.log(title.className);
// console.log(title.id);
// console.log(title.style);
// console.log(title.tagName);
// console.log(title.textContent);

// // Events
// addEventListener
// const element = document.querySelector(".buttonClass");
// const element = document.getElementById("buttonId");
// const title = document.querySelector(".tituloClass");

// element.addEventListener("click", () => {
// 	console.log("Click");
// 	title.textContent = "Title from JS";
// });

// // Practice
// const inputColor = document.getElementById("inputColor");
// const btnVisualizar = document.getElementById("btnVisualizar");
// const parrafoExa = document.getElementById("parrafoExa");
// const cardColor = document.getElementById("cardColor");

// btnVisualizar.addEventListener("click", () => {
// 	parrafoExa.textContent = inputColor.value;
// 	cardColor.style.backgroundColor = inputColor.value;
// 	navigator.clipboard
// 		.writeText(inputColor.value)
// 		.then(() => console.log("texto copiado"))
// 		.catch((e) => console.log(e));
// });

// // createElement
// const list = document.getElementById("list");

// const element = document.createElement("li");
// element.textContent = "Element from JS";
// console.log(element); // <li>Element from JS</li>

// list.appendChild(element);

// const arrayCountries = ["Colombia", "Argentina", "Spain"];

// arrayCountries.forEach((country) => {
// 	// This produces reflow like innerHTML
// 	const element = document.createElement("li");
// 	element.textContent = country;
// 	list.appendChild(element);
// });

// // Fragment
// const list = document.getElementById("list");

// const countryArray = ["Colombia", "Argentina", "Spain"];

// const fragment = document.createDocumentFragment();
// const fragment = new DocumentFragment();

// countryArray.forEach((country) => {
// 	const element = document.createElement("li");
// 	element.textContent = country;
// 	fragment.appendChild(element);
// });

// now we test insertBefore() method

// countryArray.forEach((country) => {
// 	const newNode = document.createElement("li");
// 	newNode.textContent = country;

// 	const referenceNode = fragment.firstChild;
// 	console.log(referenceNode);
// 	fragment.insertBefore(newNode, referenceNode);
// 	console.log(fragment);
// });

// list.appendChild(fragment);

// // Practice createElement
// const list = document.getElementById("list");

// const countryArray = ["Colombia", "Argentina", "Spain"];

// const fragment = document.createDocumentFragment();

// countryArray.forEach((country) => {
// 	const li = document.createElement("li");
// 	li.className = "list";
// 	const b = document.createElement("b");
// 	b.textContent = "País: ";
// 	const span = document.createElement("span");
// 	span.className = "text-primary";
// 	span.textContent = country;

// 	li.appendChild(b);
// 	li.appendChild(span);

// 	fragment.appendChild(li);
// });

// list.appendChild(fragment);
