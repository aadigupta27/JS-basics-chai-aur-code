let myName = "Aadi   ";

String.prototype.trueLength = function() {
    console.log(`${this}`);  // refers to Aadi as it was its reference.
    console.log(`True length is: ${this.trim().length}`)
}

myName.trueLength()

let myHeros = ["thor", "spiderman"];

let heroPower =  {
    thor : "Hammer",
    spiderman : "Sling",

    getSpiderPower : function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

// prototype property create karne ke liye .prototype use karna padhta hai har function ke liye, use karne ke liye
// par jaise function, array or strings sabhi ke grandParents as per prototyping model of JS is objects, 
// to sirf object pe ek prototype property craete karne ke baad use har chiz main use kiya jaa sakta hai...be it in a object, array or string!

Object.prototype.Aadi = function(){
    console.log(`Aadi is present as a prototype property.`)
}

// directly accessing top level heirarchy (Object), and creating property to that object.

Array.prototype.HeyAadi = function(){
    console.log(`Aadi says hello`);
}
// array main property create ki.

// heroPower.Aadi(); // works fine for both as defined in the function.
// myHeros.Aadi();
// myHeros.HeyAadi();  // kaam karni chahiye or kar bhi rahi hai
// heroPower.HeyAadi();  // kaam nahi krni chahiye kyunki reverse inheritance jaisa koi concept nhi hota Js main.
                        // error throw krega.

// Inheritance :-

const User = {
    name : "Chai",
    email : "ChaiAurCode@Youtube.com"
}
const teacher ={
    makeVideo : true,
}
const TeachingSupport = {
    IsAvailable : false
}
const TAsupport = {
    makeAssignment : 'JS assignemnt',
    fullTime : true,
    __proto__: TeachingSupport    // to give prototyple inheritance.
}


// Modern syntax

Object.setPrototypeOf(TeachingSupport, teacher)  // similar to extend keyword in java, TeachingSupport inheriting (prototypically) properties of Teacher.