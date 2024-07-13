class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`username : ${this.username }`) 
    }
    static createId(){  //Static properties cannot be directly accessed on instances of the class. Instead, they're accessed on the class itself.
        return '123';
    }
}
const Hitesh = new User("Hitesh");
Hitesh.logMe();
console.log(Hitesh.createId()) // error thrown -- function not defined.

class Teacher extends User{
    constructor(username, email){
        super(username);
        this.email = email;
    }
}
const android = new Teacher("android", "android@samsung.com");
console.log(android.createId());  // not accessible to even child class instances.