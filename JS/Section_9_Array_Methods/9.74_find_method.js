//////////////////////////////////
//        Find Method         //
//////////////////////////////////

// This returns the FIRST result found which passes a condition.

const scores4 = [10, 5, 0, 40, 60, 10, 20, 70];

const firstHighScore = scores4.find(score => {
	return score > 50;
});

console.log('firstHighScore = ', firstHighScore);
