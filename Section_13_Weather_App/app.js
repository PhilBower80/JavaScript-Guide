// this .js file is for DOM manipulation.

const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUI = data => {
	console.log(data);
	// const cityDetails = data.cityDetails;
	// const weather = data.weather;

	// destructure properties
	// easy way to get properties from an object and store them as a variable of the same name. No need to declare variables seperately as above variables that are now commented out.

	const { cityDetails, weather } = data; // Destructure properties

	// update details template
	details.innerHTML = `
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
    <h6 class="my3">${cityDetails.AdministrativeArea.EnglishName}</h6>
    <h6 class="my-3">${cityDetails.Country.EnglishName}</h6>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${weather.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
    </div>
  `;

	// update the night/day & weather icon images
	const iconSrc = `../../Assets/icons/${weather.WeatherIcon}.svg`;
	icon.setAttribute('src', iconSrc);

	// If condition vs Ternary operator

	// let timeSrc = null;
	// if (weather.IsDayTime) {
	// 	timeSrc = '../../Assets/day.svg';
	// } else {
	// 	timeSrc = '../../Assets/night.svg';
	// }

	// Ternary operator
	let timeSrc = weather.IsDayTime
		? '../../Assets/day.svg'
		: '../../Assets/night.svg';

	time.setAttribute('src', timeSrc);

	// remove the d-none class if present
	if (card.classList.contains('d-none')) {
		card.classList.remove('d-none');
	}
};

const updateCity = async city => {
	// console.log(city);
	const cityDetails = await getCity(city);
	const weather = await getWeather(cityDetails.Key);

	// return {
	// 	cityDetails: cityDetails, // property: variable name,
	// 	weather: weather          // property: variable name
	// };

	return {
		// because we are naming the property name the same as the variable...This is the Object Shorthand Notation.
		cityDetails,
		weather
	};
};

cityForm.addEventListener('submit', e => {
	// prevent default action
	e.preventDefault();

	// get city value from web page input
	const city = cityForm.city.value.trim();
	cityForm.reset();

	// update UI with new city
	updateCity(city)
		// .then(data => console.log(data)) // use to get key info from console log to update HTML then replaced by the following line.
		.then(data => updateUI(data))
		.catch(err => console.log(err));
});
