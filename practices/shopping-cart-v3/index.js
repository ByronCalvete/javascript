const cart = document.getElementById("my-cart");
const templateList = document.getElementById("itemTemplate");
const footer = document.getElementById("footer");
const templateFooter = document.getElementById("templateFooter");
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
		title: e.target.dataset.fruit,
		id: e.target.dataset.fruit,
		quantity: 1,
		price: parseInt(e.target.dataset.price),
	};

	const index = fruitsCart.findIndex((item) => item.id === product.id);

	if (index === -1) {
		fruitsCart.push(product);
	} else {
		fruitsCart[index].quantity += 1;
	}

	paintCart();
};

const paintCart = () => {
	cart.textContent = "";

	fruitsCart.forEach((item) => {
		const cloneTemplate = templateList.content.cloneNode(true);
		cloneTemplate.querySelector(".text-white .lead").textContent = item.title;
		cloneTemplate.querySelector(".badge").textContent = item.quantity;

		cloneTemplate.querySelector("div .lead span").textContent =
			item.price * item.quantity;

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

	const cloneFooter = templateFooter.content.firstElementChild.cloneNode(true);
	cloneFooter.querySelector("span").textContent = total;

	footer.appendChild(cloneFooter);
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
