const User = {
    _email :'aadi@gmail.com',
    _password : '123aaa',

    get email(){
        return this._email;
    },
    set email(value){    // here set email is more of a property than a method 
        this._email = value;
    }
}

const chai = Object.create(User)
console.log(chai._email);  // both prints same result 
console.log(chai.email);
