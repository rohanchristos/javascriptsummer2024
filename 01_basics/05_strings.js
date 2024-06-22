const name = "rohan"
const repocount = "55"

// console.log(name + repocount + "value");

console.log(`hello my name is ${name} and my repo count is ${repocount}` );

const gamename = new String('rohanhc')


console.log(gamename[1]);
console.log(gamename[0]);
console.log(gamename[10]);
const gamename = new String("rohan-rrr")

console.log(gamename[1]);
console.log(gamename[2]);

console.log(gamename.__proto__);


console.log(gamename.length);

console.log(gamename.toUpperCase());

console.log(gamename.charAt(2));

console.log(gamename.indexOf('h'));

const newstring =  gamename.substring(0,5);

console.log(newstring);


const anotherstring = gamename.slice(-9,4);

console.log(anotherstring);

const newstrin1 = "  rohan  "
console.log(newstrin1);

console.log(newstrin1.trim());

const url = "https://rohan.com/rohan%20ghosh"

console.log(url.replace('%20','-'));


console.log(url.includes('rohan'));

console.log(gamename.split('-'));


