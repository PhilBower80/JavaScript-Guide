// this .js file is for requesting the api's

// key info from AccuWeather.com
const key = 'rZAFJj77NZZi4bx84kBhRx33CQZiexZq';

// get weather info

const getWeather = async locationKey => {
	const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
	const query = `${locationKey}?apikey=${key}`;

	const response = await fetch(base + query);
	const data = await response.json();

	return data[0];
};

// get city info
const getCity = async city => {
	const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
	const query = `?apikey=${key}&q=${city}`;

	const response = await fetch(base + query);
	const data = await response.json();

	// console.log(data[0]);
	return data[0];
};

// for testing

// getCity('manchester')
// 	.then(data => {
// 		return getWeather(data.Key);
// 	})
// 	.then(data => {
// 		console.log(data);
// 	})
// 	.catch(err => console.log(err));
