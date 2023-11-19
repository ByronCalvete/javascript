const cart = document.getElementById("my-cart");
const footer = document.getElementById("footer");
const templateList = document.getElementById("listTemplate");
const templateFooter = document.getElementById("footerTemplate");
const fragment = document.createDocumentFragment();

// Event delegation
document.addEventListener("click", (e) => {
	if (e.target.matches(".card .btn-outline-primary")) {
		addToCart(e);
	}

	if (e.target.matches(".list-group-item .btn-success")) {
		addFromItem(e);
	}

	if (e.target.matches(".list-group-item .btn-danger")) {
		substractFromItem(e);
	}
});

// Main array of fruits
let fruitsCart = [];

const addToCart = (e) => {
	const product = {
		name: e.target.dataset.fruit,
		id: e.target.dataset.fruit,
		quantity: 1,
		price: parseInt(e.target.dataset.price),
	};

	const index = fruitsCart.findIndex((fruit) => fruit.id === product.id);

	if (index === -1) {
		fruitsCart.push(product);
	} else {
		fruitsCart[index].quantity += 1;
		// fruitsCart[index].price =
		// 	fruitsCart[index].quantity * fruitsCart[index].price;
	}

	paintCart();
};

const paintCart = () => {
	cart.textContent = "";

	fruitsCart.forEach((item) => {
		const cloneTemplate = templateList.content.cloneNode(true);
		// first li
		cloneTemplate.querySelector(".badge").textContent = item.quantity;
		cloneTemplate.querySelector(".text-white .lead").textContent = item.name;

		//second li
		cloneTemplate.querySelector("div .lead span").textContent =
			item.quantity * item.price;
		cloneTemplate.querySelector(".btn-danger").dataset.id = item.id;
		cloneTemplate.querySelector(".btn-success").dataset.id = item.id;

		fragment.appendChild(cloneTemplate);
	});

	cart.appendChild(fragment);
	paintFooter();
};

const paintFooter = () => {
	footer.textContent = "";

	const total = fruitsCart.reduce(
		(accumulator, currentValue) =>
			accumulator + currentValue.quantity * currentValue.price,
		0
	);

	if (total === 0) return;

	const cloneTemplate =
		templateFooter.content.firstElementChild.cloneNode(true);
	cloneTemplate.querySelector("span").textContent = total;

	footer.appendChild(cloneTemplate);
};

const addFromItem = (e) => {
	fruitsCart = fruitsCart.map((item) => {
		if (item.id === e.target.dataset.id) {
			item.quantity += 1;
		}
		return item;
	});

	paintCart();
};

const substractFromItem = (e) => {
	fruitsCart = fruitsCart.filter((item) => {
		if (item.id === e.target.dataset.id) {
			if (item.quantity > 0) {
				item.quantity -= 1;
				if (item.quantity === 0) return;
				return item;
			}
		} else {
			return item;
		}
	});

	paintCart();
};
