let ninjas = ['shaun', 'ryu', 'chun-li'];
console.log(ninjas);

console.log(ninjas[1]);

ninjas[1] = 'ken';
console.log(ninjas[1]);
console.log(ninjas.length);

// // Array methods

let result1 = ninjas.join(','); // This will append a ',' (or whatever you put in the '')
console.log(result1);

let result2 = ninjas.indexOf('chun-li'); // This will return the index position.
console.log(result2);

let result3 = ninjas.concat(['ken', 'crystal']); // Concat the new values to the ninja array.
console.log(result3);

let result4 = ninjas.push(['Guile']); // This alters (adds to) the arrays (known as a destructive method). This return the new length of the array.
console.log(result4);

let result5 = ninjas.pop(); // This alters (removes from) the arrays (known as a destructive method). Will return the value which has been popped off.
console.log(result5);
