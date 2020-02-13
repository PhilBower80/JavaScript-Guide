// Visit website below for info on using this date/time format library.
// See script tag in html file for link details.
// https://date-fns.org/

const now3 = new Date();

// console.log(dateFns.isToday(now));

// common formatting options. Visit https://date-fns.org/v2.9.0/docs/format for more.
console.log('Date format = YYYY: ', dateFns.format(now, 'YYYY')); // 2020
console.log('Date format = YY: ', dateFns.format(now, 'YY')); // 20
console.log('Date format = MMMM: ', dateFns.format(now, 'MMMM')); // February
console.log('Date format = MMM: ', dateFns.format(now, 'MMM')); // Feb
console.log('Date format = dddd: ', dateFns.format(now, 'dddd')); // Thursday;
console.log('Date format = ddd: ', dateFns.format(now, 'ddd')); // Thu
console.log('Date format = DD: ', dateFns.format(now, 'DD')); // 13
console.log('Date format = Do: ', dateFns.format(now, 'Do')); // 13th
console.log(
	'Date format = Chained: ',
	dateFns.format(now, 'dddd Do MMMM YYYY')
);

// comparing dates
const before2 = new Date('November 2 2019 12:00:00:');

console.log(
	'Date course started: ',
	dateFns.distanceInWords(now3, before2, { addSuffix: true })
);
