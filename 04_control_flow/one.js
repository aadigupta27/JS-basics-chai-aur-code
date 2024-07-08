
// falsy values
// null, undefined, "", 0, -0, bigint 0n, false

// Truthy values
// "false", "0", "-0", [], {}, funtion(){}    these are some of the exceptional cases !

//checking is whether array is empty
const arr1 = [];

if(arr1.length == 0) console.log("Array is empty");   // implicit scoping in if statement

// similarly in objects 

const firstObj = {};
if(Object.keys(firstObj).length == 0){
    console.log("The given object is empty");
}

// Nullish Coalescing Operator ??  null and undefined

let val1;
val1 = null ?? 10;   // checks whether the first assigned value is valid(not null or undefined), if yes assigns that value or else assigns another value
val1 = undefined ?? 20; // output 20
console.log(val1);

// terniary operator
// condition ? true : false