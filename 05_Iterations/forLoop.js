// for of loops

const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
    // console.log(num);
}

const greeting = "Hello World!";
for (const greet of greeting) {
    // console.log(`each char is, ${greet}`)
}

//Maps     // the enteries will be unique and in the order the user has entered !

const map = new Map();
map.set("IN", "INDIA");
map.set("UK", "UNITED KINGDOM");
map.set("JP", "JAPAN");
map.set("KN", "KOREA");
map.set("IN", "INDIA");     // India will be printed just once.

// console.log(map);

for (const [key, value] of map) {        // destructuring of a map
    // console.log(key + ":-" + value);    // to print the indivisual key and values of map
}

const myObj = {
    'game1' : "NFS",
    'game2' : "FIFA",
    'game3' : "Mortal Kombat"
}
// console.log(myObj);

// for (const values of myObj) {
//     console.log(values);
// }
    

// to print the object we use for in loop
// for in loop

for (const key in myObj) {
    // console.log(`${key} :- ${myObj[key]}`);    // in for in loop, key gives key and object[key] gives value

}

const myarray = [1, 2, 3, 4, 5];

for (const key in myarray) {    // for in loop can be used for arrays too in the same manner
    // console.log(myarray[key]);   // arrays keys are their index numbers
}

for (const key in map) {   // no output-- as map is non iterable. there are another ways of performing iterations on map 
    // console.log(key);
}


// forEach loop

const coding = ["js", "java", "ruby", "python"];

coding.forEach( (item) => {     // name.forEach( callback function );, callback fn doesn't have a name just the parameter and the definition.
    // console.log(item);          // for each item print the item.
});

coding.forEach((item, index, array) => {    // this callback fn takes upto 3 values, item , index and string[].
    // console.log(item, index, array);
})

const myCoding = [
    {
        langName : "Javascript",
        dotExtension : "JS"
    },
    {
        langName : "Java",
        dotExtension : "Java"
    },
    {
        langName : "Python",
        dotExtension : "Py"
    }
]

myCoding.forEach( (items) => {
    // console.log(`key : ${Object.keys(items)} and value : ${Object.values(items)}`);
    // console.log(items.langName)
    // console.log(items.dotExtension);
})


// Filter function !!!


// for Each loop doesnt return anything so to perform some action to each element of object or array
// we use filter (it returns the values)

const myarr = [1, 2, 3, 4, 5];
const result = myarr.filter( (num) => num > 2);   // similar to forEach in syntax
// console.log(result);

// another way possible usinf forEach loop too
const mynewarr = [];

myarr.forEach( (num) => {
    if(num > 2){
        mynewarr.push(num);
    }
})
// console.log(mynewarr);

//  const result2 = myarr.map( (num) => {
//     return num + 10;
// })


// Map Function !!!


const result2 = myarr.map( (num) => num + 10)    // very much similar to forEach loop
// console.log(result2);

// chaining of functions !!!

const result3 = myarr
                    .map( (num) => num*10)
                    .map( (num) => num + 10);  // chaining! . next map will have array returned by first map function.
// console.log(result3);


// Reduce function !!!

// const total = myarr.reduce( (acc, currval) => {
//     console.log(`acc : ${acc}, and currval: ${currval}`);     // with arrow function
//     return acc + currval ;
// },0)  // this 0 is the initial value given to the accumulator. 

// const total1 = myarr.reduce( function (acc, currval) {
//     console.log(`acc : ${acc}, and currval: ${currval}`);   // with traditional function
//     return acc + currval ;
// }, 0)
// console.log(total1);


const shoppingCart = [
    {
        itemName : "Js course",
        price : 1999
    },
    {
        itemName : "Py course",
        price : 999
    },
    {
        itemName : "webdev course",
        price : 9999
    },
    {
        itemName : "Java course",
        price : 3999
    },
    {
        itemName : "C++ course",
        price : 1499
    },
]

 const finalCost = shoppingCart.reduce( (acc, cost) => {
    return acc + cost.price;
 },0)
 console.log(finalCost);
