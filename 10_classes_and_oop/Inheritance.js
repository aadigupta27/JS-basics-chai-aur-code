class User {
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username);   // refers parent class -- (.call behind the scene)
        this.email = email;
        this.password = password;
    }
    addCourse(){
        console.log(`new course was added by ${this.username}`);
    }
}
const chai = new Teacher("chai", "chai@teacher.com", 1234);
console.log(chai)
chai.addCourse();

const tea = new User("Tea", "tea@chai.com", 123);
// tea.addCourse();   // parent cannot inherit properties of child, but child inheriting parent can access properties declared in them. 
chai.logMe();

console.log(chai instanceof Teacher);   //true
console.log(chai instanceof User);     //true