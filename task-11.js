/* 11. Task: Functional Programming - Reduce

Write A Function That Uses The Reduce Function To Calculate The Total Value Of An Array Of Objects With A 'Quantity' And 'Price' Property. */

const items = [
	{ quantity: 2, price: 10 },
	{ quantity: 3, price: 15 },
	{ quantity: 1, price: 5 },
];
const CalculateTotalValue = (items) => {
	return items.reduce((acc, item) => acc + item.quantity * item.price, 0);
};

const totalValue = CalculateTotalValue(items);
console.log(totalValue);
