//////////////////////////////////////////////////////////////////////
//   Example - Filter out any product that isn't over 20 in price.  //
//   Then take filtered product array and map to a new array, this  //
//   new array will be formatted with a sale price                  //
//////////////////////////////////////////////////////////////////////

const products2 = [
	{ name: 'gold star', price: 30 },
	{ name: 'green shell', price: 10 },
	{ name: 'red shell', price: 40 },
	{ name: 'banana skin', price: 5 },
	{ name: 'mushroom', price: 50 }
];

//////////////////////////////////////////////////////////////////////
//   Example - UNCHAINED                                            //
//////////////////////////////////////////////////////////////////////
const filtered = products2.filter(product => product.price > 20);

const promos = filtered.map(
	product => `the ${product.name} is ${product.price / 2}`
);

console.log('promos (unchained) = ', promos);

//////////////////////////////////////////////////////////////////////
//   Example - CHAINED                                            //
//////////////////////////////////////////////////////////////////////

const promos2 = products2
	.filter(product => product.price > 20)
	.map(product => `the ${product.name} is ${product.price / 2}`);

console.log('promos (chained) = ', promos2);
