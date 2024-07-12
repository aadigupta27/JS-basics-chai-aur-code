function setUsername (username){   // yeh call stack main sabse upar hai(last one to execute and first one to get out of the call stack)
    //Complex DB calls              // toh stack se bahar nikalne ke baad uske refernce ko store karwane ke liye .call use karte hain
    this.username = username;       // reference to rahega par uske variables aur context cahle jaayenge, toh ab uske this main se username hat chuka hai  
}

function createUser(username, email, password){
    setUsername.call(this, username);   // toh ab username ko access krne ke liye, apne this ka reference dena padega!, kyunki uska this bachega nahi.
    this.email = email;                 // ab username ka bhi reference store ho jaayega toh result ab expected hi aayega.
    this.password = password;           // toh ab agar setUsername hat bhi gaya stack se toh uske variables, objects, etc par haq (refrence) createUser ke paas hoga.
}
const Aadi = new createUser("Aadi", "aadi@yt.com", "1233");
console.log(Aadi);  // setusername is not working ! 

// call hamara current context dusre function ko pass kar deta hai.