// Singleton - when only 1 object is created

// Object literals - multiple objects can be created.

//symbol declaration

const mySym = Symbol("key1");

const JsUser = {
    name : "Aadi Gupta",
    email : "aadi@google.com",
    activeStatus : false,
    [mySym] : "Mykey1" // symbols are used in [] brackets...other other this the type of symbol will be a string
}



// // console.log(JsUser.My name); cannot be accessed bcoz of the whitespaces.
// console.log(JsUser["My name"]); // best method to access the objects.
// console.table([JsUser.email, JsUser.activeStatus]);
// console.table([JsUser["email"], JsUser["activeStatus"], typeof JsUser[mySym]]); // whethe rthe object's datatype is of string or anyother, "" are mandatory!

JsUser.email = "aadi@yahoo.com";
// Object.freeze(JsUser);
JsUser.email = "aadi@microsoft.com"
// console.log(JsUser);    

// using dot operator I can access, rewrite and even create an object in JS.

JsUser.greetings = function(){
    console.log("Hey there fellows !");
}
JsUser.greetingsTwo = function(){
    console.log(`Hey there fellows!, I'm ${this.name}`);  //to accessobject from same instance we use this keyword
}
console.log(JsUser.greetings);  //Output -- function (anonymous)....func not executed only reference is generated
console.log(JsUser.greetings());  //Output -- expected
console.log(JsUser.greetingsTwo());


