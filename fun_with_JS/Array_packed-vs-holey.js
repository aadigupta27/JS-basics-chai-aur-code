const arr = [];
// %DebugPrint(arr);

//    to be accessed via d8 Engine, in V8-debug engine
// all tasks are done after installing jsvu and customised os and engine along with it.
// using flag as (--allow-native-syntax)  // allows us to enter in d8 version of V8-debug engine.
// and then test file.

// continous, Holey array
// internal optimisation of array (generally in every language)

// SMI (Samll Integer)  // best type of array
//Packed element
//Double (float, string, functions)


const arrTwo = [1, 2, 3, 4, 5, 6];
//Packed SMI Elements  (no holes)  // most optimised form // only numbers are allowed

arrTwo.push(7.0);
//Packed Double Elements 

arrTwo.push("aadi");
//Packed Element   // har ek ke optimise hone ka tarika alag hota hai
// Ek baar downgrade ho gya toh waapas upgrade nahi ho skta hai... PAcked Elements se packed double element nhi ho skta

arrTwo[10] = 11;
//Holey Elements (bcoz of gap created now)

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[8]); // or console.log(arrTwo[18])  output-- undefined.

//bound check  (array out of bound)
//hasOwnProperty(arrTwo, 9)  // does array contains anything with number 9 ?
//hasOwnProperty(arrTwo.prototype, 10)  //check ki array ke prototype main to nahi hai
//hasOwnProperty(Object.prototype, 10)  // bcoz of prototyple nature check ki object ke prototype main toh nahi hai
//hasOwnProperty check is the most expensive check in Js.

// That's why, Holes are very expensive.

const arr3 = [1, 2, 3, 4, 5]
console.log(arr3[10]);

//Order of optimization 

// SMI > DOUBLE > PACKED
// H_SMI > H_DOUBLE > H_PACKED   (packed is a generic term, means it includes numbers, strings and functions too)

const arr4 = new Array(3);
//Just 3 holes. HOLEY_SMI_ELEMENTS
arr4[0] = "1"; // HOLEY_ELEMENTS
arr4[1] = "2"; // HOLEY_ELEMENTS
arr4[2] = "3"; // HOLEY_ELEMENTS

const arr5 = [] // better optimization, kyunki ab maine 3 kahli spaces wale array ki jagah, ek empty array liya hai which is SMI
arr5.push('1') // PACKED_ELEMENTS
arr5.push('2') // PACKED_ELEMENTS
arr5.push('3') // PACKED_ELEMENTS

const arr6 = [1, 2, 3, 4, 5];
arr6.push(NaN) //PACKED_DOUBLE
arr6.push(Infinity) //PACKED_DOUBLE

// for, for-of, forEach (use internally defined functions in ur code instead of creating your own way with less optimization as they are in the most optimised form)