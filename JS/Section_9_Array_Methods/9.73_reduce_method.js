//////////////////////////////////
//        Reduce Method         //
//////////////////////////////////

// This example will cycle through the array and return the number of items in the array which are greater than 50.

// Total = accumulator (can be called whatever you like)
// This counts the number of
//currentValue = current (can be called whatever you like)

const scores2 = [10, 20, 60, 40, 70, 90, 30];

const result = scores2.reduce((total, currentValue) => {
	if (currentValue > 50) {
		total++;
	}
	return total;
}, 0); // The 0 here is the initial value for 'total'.

console.log(result);

/////////////////////////////////////////////////////////////////////////////
// ANOTHER EXAMPLE

const scores3 = [
	{ player: 'mario', score: 50 },
	{ player: 'yoshi', score: 30 },
	{ player: 'mario', score: 70 },
	{ player: 'crystal', score: 60 }
];

const marioTotal = scores3.reduce((total, currentValue) => {
	if (currentValue.player === 'mario') {
		total += currentValue.score;
	}
	return total;
}, 0);

console.log('marioTotal = ', marioTotal);
