const now = new Date();

console.log(now);
console.log(typeof now);

// year, months, day, times
console.log('getFullYear:', now.getFullYear());
console.log('getMonth:', now.getMonth());
console.log('getDate:', now.getDate());
console.log('getDay:', now.getDay());
console.log('getHours:', now.getHours());
console.log('getMinutes:', now.getMinutes());
console.log('getSeconds:', now.getSeconds());

// timestamps
console.log('timestamp', now.getTime()); // number of milliseconds since 12:00am 1970.

// date strings
console.log('toDateString', now.toDateString());
console.log('TimeString', now.toTimeString());
console.log('toLocaleString', now.toLocaleString());
