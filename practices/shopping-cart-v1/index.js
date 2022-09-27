const cart = document.getElementById("my-cart");
const template = document.getElementById("itemTemplate");
const fragment = document.createDocumentFragment();
const buttons = document.querySelectorAll(".card button");

const fruitsCart = {};

const addToCart = (e) => {
	const product = {
		title: e.target.dataset.fruit,
		id: e.target.dataset.fruit,
		quantity: 1,
	};

	if (fruitsCart.hasOwnProperty(product.title)) {
		product.quantity = fruitsCart[product.title].quantity + 1;
	}

	fruitsCart[product.title] = product;

	paintCart();
};

const paintCart = () => {
	cart.textContent = "";

	Object.values(fruitsCart).forEach((item) => {
		const cloneTemplate = template.content.firstElementChild.cloneNode(true);
		cloneTemplate.querySelector(".lead").textContent = item.title;
		cloneTemplate.querySelector(".badge").textContent = item.quantity;

		fragment.appendChild(cloneTemplate);
	});

	cart.appendChild(fragment);
};

buttons.forEach((button) => button.addEventListener("click", addToCart));
