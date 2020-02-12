//////////////////////////////////
//          Map Method          //
//////////////////////////////////

// Cycles through an array and creates new array based on function.
// The example below simply returns a new array with the prices reduced by 50%.

const prices = [20, 10, 30, 25, 15, 40, 80, 5];

const salePrices = prices.map(price => {
	return price / 2;
});

console.log(salePrices);

///////////////////////////////////////////////////////////////////
// ANOTHER EXAMPLE
// New array with those prices that are over 30 to be reduced by 50%.
///////////////////////////////////////////////////////////////////
const products = [
	{ name: 'gold star', price: 20 },
	{ name: 'mushroom', price: 40 },
	{ name: 'green shells', price: 30 },
	{ name: 'banana skin', price: 10 },
	{ name: 'red shells', price: 50 }
];

const saleProducts = products.map(product => {
	if (product.price > 30) {
		return { name: product.name, price: product.price / 2 }; // This is no-destrructive. Creates a new object rather than changing the original one.
	} else {
		return product;
	}
});

console.log('Sales Products = ', saleProducts);
