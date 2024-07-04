const marvel = ["ironman", "Thor", "BlackWidow"];
const dc = ["Superman", "Batman"];
const indian = ["Shaktimaan", "Naagraj"];

// const all_Heroes = marvel.concat(dc);
// const all_Heroes  = [...marvel, ...dc, ...indian];
// console.log(all_Heroes);

// const anotherArray = [1, 2, 3, [4, 5, 6], 7, [8, 9, 0], 8];
// const real_anotherArray = anotherArray.flat();
// console.log(real_anotherArray);

console.log(Array.isArray("Aadi"));
console.log(Array.from("Aadi"));
console.log(Array.from({name: "Aadi"})); // interesting case to remember. We need to clarify whether to make an array of key or an array of value pair. Unless not defined it returns the empty string !!!

let target1 = 100;
let target2 = 200;
let target3 = 300;

console.log(Array.of(target1, target2, target3)); // to concatenate multiple objects or set of elements we use 'of' instead of 'from' !
console.log(Array.from(target1, target2, target3)); // error is thrown!!




