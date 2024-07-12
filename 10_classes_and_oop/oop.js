const user = {
    username: "aadi",
    loginCount : 8,
    signedIn : true,

    getDetails : function(){
        // console.log(username); // error that username is not defined as its not able to refer to username outside scope of the function, but 
        console.log(this.username)  // using this keyword gives reference to function that we are talking about username declared in the same place(object) as where function is created. 
        console.log(this)  // gives the whole object( complete current context) including function
    }
}

// console.log(user[`username`]);
// console.log(user.getDetails());
console.log(this);  // empty object ( Node environment).
// this value gives window object when command executed on window environment 


// Constructor function

function User (username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greetings = function(){
        console.log(`Hello, ${this.username}`);
    }

    // return this  //defined implicitly !
}

const user1 = new User("Hitesh", 9, false);
const user2 = new User("Aadi", 0, true);  // all the values of user1 is overwritten in user2. Instead using new keyword creates new instance of an object, hence all the users are different from each other.
// console.log(user1);
console.log(user1.constructor);  // gives function user...refernce about itself.
// review instanceof keyword too.
// new keyword use karne se constructor function call hote hain...bina new ke call karoge toh return this karna padega. 