const user = {
    username :"Aadi",
    price : 999,

    welcomeMessage : function(){
        console.log(`welcome, ${this.username}`)  //this refers current content 
        console.log(this); // gives details of object(current context) as its present in object environment
    }
}
user.welcomeMessage();
user.username = "Disha";
user.welcomeMessage();

console.log(this); // gives an empty object as its present in node environment

// In browser console.log(this) gives windows as a global variable where all the functions are residing ! 

const coffee = () => {  //declaring functions using arrow operator
    const username = "Aadi"
    console.log(this.username)  // undefined -- we cannot access username using this keyword in functions
}

// const addTwo = (num1, num2) => {   // declaring arrow func explicitly
//     return num1 + num2 ;
// }

// const addTwo = (num1, num2) => num1 + num2 ;  //another way to declare arrow function (implicitly)

const addTwo = (num1, num2) => (num1 + num2)  // curly braces - use return keyword,  parenthesis - no need to use return keyword

const addtwo = () => ({username : "aadi"}) 