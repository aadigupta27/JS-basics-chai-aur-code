const a = 300; // declared as a global scope 

 if(true){
    const a = 10;    // the curly braces defines the scope
    let b = 20;
    var c = 30;
 }
//  console.log(a); // error -- a not defined , but now prints 300
//  console.log(b);  // error -- b not defined
//  console.log(c);  // prints the value of c (var doesnt follow the scope behaviour)


 function one(){
    const username = " aadi";
    function two(){
        const website = "youtube.com";
        console.log(username);
    }
    // console.log(website);  // error -- website is not defined. As website is only defined in the function two scope hence we cannot access it outside. but for func two all the variables declared in func one are treated as global variables 
    two();
 }
 one(); // if one() is not called...two() cannot be accessed !

 // ++++++++++++++++++++++  INTERESTING ++++++++++++++++++++++++

  console.log(addOne(5)) // output-- prints 6... function can be called before declaring it if declared conventionally ! 
 function addOne(num){
    return num + 1;       // normal declaration of function
 }

 console.log(addTwo(5))  // output -- gives error...hence when declaring a function via variable..function call is to be made after declaration of the func

 const addTwo = function(num){   // declaring function by storing it in a variable.
    return num + 2;
 }