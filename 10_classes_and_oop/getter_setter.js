class User {
    constructor (email, password){  // constructor and setter method both are trying to set the value of password...bcoz of which- unke beech main ek race lag jaati hai, jiski wajah se donon hi values set krke call ho rhe hote hai, or uski wajah se call-stack over-flow error aa jata hai.
        this.email = email;         // maximum call stack size exceeded.
        this.password = password;
    }
    get email(){
        return `${this._email.toUpperCase()}`;    //_email use kiya hai isiliye call stack overflow error nahi aayega !
    }
    set email(myEmail){
        this._email = myEmail;
    }
    get password(){
        return `${this.passcode}gupta`  // setter ka confusion hatane ke liye password ka naam hi change kr diya.
}                                           // jaise get karunga wese hi value set bhi hogi
    set password(value){
        this.passcode = `${value}aadi`;
    }
}
const aadi = new User("Aadi@27", "abcd");
console.log(aadi.password);
console.log(aadi.email);

// output : abcdaadigupta
