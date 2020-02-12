//////////////////////////////////////////////////////////////////////
//   Example 1 - sorting strings                                    //
//////////////////////////////////////////////////////////////////////

const names = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];

names.sort(); // this is destructive (it changes the original array).
names.reverse(); // reverses the sort order.
console.log('Sort Method: strings ', names);

//////////////////////////////////////////////////////////////////////
//   Example 2 - sorting numbers                                    //
//////////////////////////////////////////////////////////////////////

const scores5 = [10, 50, 20, 5, 35, 70, 45];

scores5.sort(); // this is destructive (it changes the original array). This sorts in numerical order but only by the first digit
console.log('Sort Method: numbers ', scores5);

// This will return the numbners sorted largest - smallest.

scores5.sort((a, b) => a - b); // this is destructive (it changes the original array).
console.log('Sort Method - small>large: numbers ', scores5);

//////////////////////////////////////////////////////////////////////
//   Example 3 - sorting objects                                    //
//////////////////////////////////////////////////////////////////////

const players = [
	{ name: 'mario', score: 20 },
	{ name: 'luigi', score: 10 },
	{ name: 'chun-li', score: 50 },
	{ name: 'yoshi', score: 30 },
	{ name: 'shaun', score: 70 }
];

players.sort((a, b) => b.score - a.score);

console.log('players = ', players);
