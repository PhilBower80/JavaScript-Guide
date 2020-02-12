//////////////////////////////////
//        Filter Method         //
//////////////////////////////////

// 1st example
// Shows how to filter using 'greater than'

const scores = [10, 30, 15, 25, 50, 40, 5];

const filteredScores = scores.filter(score => {
	return score > 20;
});

console.log(filteredScores);

////////////////////////////////////////////////////////////////

// 2nd example
// Shows how to filter out using a key pair.

const users = [
	{ name: 'shaun', premium: true },
	{ name: 'yoshi', premium: false },
	{ name: 'mario', premium: false },
	{ name: 'chun-li', premium: true }
];

const premiumUsers = users.filter(user => user.premium);

console.log('premiumUsers = ', premiumUsers);
