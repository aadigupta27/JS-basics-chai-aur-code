
// promise creation
const promise = new Promise(function(resolve, reject){
    // Do asyn task
    // like DB calls, cryptography, network calls, etc.
    setTimeout(function(){
        console.log('Async task is completed');
        resolve();   // used to connect with then function 
    }, 1000);
})

// Promise consumption !

promise.then(function(){
    console.log("Promise consumed");  // only promise is called but no proper linking between resolve and then.
})

new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log('Async Task 2');
        resolve();
    }, 1000);
}).then(() => {
    console.log('Promise 2 consumed');
})

const promise3 = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve({username : "Chai",
            email : "example.com",
        })
    }, 1000)
})

    promise3.then((user) => {
        console.log(user);
    })

const promise4 = new Promise(function(resolve, reject){
    setTimeout( () => {
        let error = false;
        // let error = true;
        if(!error){
            resolve({
                username : "Aadi",
                password : "123",
            })
        }else {
            reject('Something went wrong !');
        }
    }, 1000)
})

promise4
.then( (user) => {
    console.log(user);
    return user.username;
})
.then( (username) => {   // chaining .then 
    console.log(username);
})
.catch((error) => {
    console.log(error);
})
.finally( () => console.log('The promise is either resolved or rejected !'));


const promise5 = new Promise(function (resolve, reject){
    setTimeout( () => {

        let error = false;
    // let error = true;
    if(!error){
        resolve({
            username : "Javascript",
            password : "12345",
        })
    }else {
        reject('ERROR : JS went wrong !');
    }
    }, 1000)
})

 async function consumePromise5(){
    try {
        const response = await promise5;
        console.log(response);
    } catch (error) {
        console.log(error);
    } finally{
        console.log('JS Error handled successfully')
    }
 }
//  consumePromise5(); 

 async function getAllUsers(){
  try {
    const response = await fetch('https://api.github.com/users/aadigupta27')
    const data = await response.json();  // response json main convert hone main bhi time lagata hai isiliye, await wahan bhi use karna pada
    console.log(data);                       // await keyword is used to wait for the promise and get its fulfilment value.
  } catch (error) {
    console.log("E: ", error);
  }
 }
//  getAllUsers();

fetch('https://api.github.com/users/aadigupta27').  // no need to create a promise. fetch is a promise itself.
then((response) => {
     const loginID = response.json();
     return loginID;
}).
then( (data) => {
    console.log(data);
}).
catch((error) => {
    console.log(error);
}).
finally ( () => console.log('fetch operation completed !'))