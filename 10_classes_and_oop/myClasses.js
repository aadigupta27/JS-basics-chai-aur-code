// ES-6

// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){    // method
//         return `${this.password}abc`
//     }
//         changeUsername (){
//             return this.username.toUpperCase();
//         }

// }
// const chai = new User("Aadi", "Aadi@gmial.com", 123);
// console.log(chai);
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

//Behind the scene !

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}
User.prototype.encryptPassword = function(){    // method
    return `${this.password}abc`
}
User.prototype.changeUsername =  function(){
    return this.username.toUpperCase();
}
const chai = new User("Aadi", "Aadi@gmial.com", 123);
console.log(chai);
console.log(chai.encryptPassword());
console.log(chai.changeUsername());

