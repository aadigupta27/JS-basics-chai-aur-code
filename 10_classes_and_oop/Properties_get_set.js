// old School method of defining getters and setters
//function based getters and setters

function User(password, email){
    this._password = password;
    this._email = email;

    Object.defineProperty(this, 'email', {    // pehle object ke getters or setters, property ke liye explicitly define karne padhte the.
        get: function(){                        // ab syntactic sugar mil chuka hai.
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })

    Object.defineProperty(this, 'password', {    
        get: function(){ 
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })
}
const chai = new User("1234", "Myemail")
console.log(chai.email);