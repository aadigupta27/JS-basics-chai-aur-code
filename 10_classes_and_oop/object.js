function multiplyBy5(num){
    return num*5;
}

multiplyBy5.power = 2;

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype); // empty object

// js main function, function bhi hai or object bhi. Js has prototyple inheritance, which is js haar nahi maanti...agar kuch dhundhne par bhi na mile toh apne grandparent pe jaake dhundhati hai...which is nothng but a object

function createUser(username, score){
    this.username = username;
    this.score = score;
}
createUser.prototype.increment = function (){  // createUser ke paas properties toh inject ho gyi par jab call kiya use tab bataya nhi ki prototype properties bhi defined hain 
    this.score++;
}
createUser.prototype.PrintMessage = function(){
    console.log(`Price is ${this.score}`)
};

// const chai =  createUser("chai", 25);   // yeh function call sirf function define karwa raha hai... uski prototype properties nahi. usko batana padega ki additional properties bhi hain uske paas.
// const tea =  createUser("tea", 250);

const chai = new createUser("chai", 25);  // yeh batane ka saara kaam new keyword krwata hai.
const tea = new createUser("tea", 250);

chai.PrintMessage();  // code not working !   // ab chalega



/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/