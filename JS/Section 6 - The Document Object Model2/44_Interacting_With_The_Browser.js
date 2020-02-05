// This includes videos 44 to 47
// The following two selectors are the most powerful way to grab an element as you can use forEach

const para = document.querySelector('p');
const paras = document.querySelectorAll('p');

console.log(paras);

// The following return a HTML Collection (cannot use forEach).

// get an element by ID
const title = document.getElementById('');

// get an element by Class Name
const title2 = document.getElementsByClassName('.content');

// get an element by ID
const title3 = document.getElementsByTagName('');
