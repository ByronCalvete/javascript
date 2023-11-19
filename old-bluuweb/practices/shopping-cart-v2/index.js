const cart = document.getElementById("my-cart");
const template = document.getElementById("itemTemplate");
const fragment = document.createDocumentFragment();
const buttons = document.querySelectorAll(".card button");

const fruitsCart = [];

const addToCart = (e) => {
	const product = {
		title: e.target.dataset.fruit,
		id: e.target.dataset.fruit,
		quantity: 1,
	};

	const index = fruitsCart.findIndex((item) => item.id === product.id);

	if (index === -1) {
		fruitsCart.push(product);
	} else {
		fruitsCart[index].quantity++;
	}

	paintCart(fruitsCart);
};

const paintCart = (arr) => {
	cart.textContent = "";

	arr.forEach((fruit) => {
		const cloneTemplate = template.content.firstElementChild.cloneNode(true);
		cloneTemplate.querySelector(".lead").textContent = fruit.title;
		cloneTemplate.querySelector(".badge").textContent = fruit.quantity;

		fragment.appendChild(cloneTemplate);
	});

	cart.appendChild(fragment);
};

buttons.forEach((button) => {
	button.addEventListener("click", addToCart);
});
