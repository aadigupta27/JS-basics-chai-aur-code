function sayMyName(){
    console.log("A");
    console.log("A");
    console.log("D");
    console.log("I");
} 

// sayMyName // reference of a function
// sayMyName() // execution of a function.
// const result = sayMyName();
// console.log(result);

// console.log() doesnt return anything...hence output == undefined.

function userLoginStatus(username) {  // username = "Disha"  giving default values, the value can be overwritten in the code block. 
    if(username === undefined){  // if(!username) can also be used.
        console.log("Please enter a valid username")
        return;
    }
    return `${username}, just logged in !`
}

// console.log(userLoginStatus("Aadi"));

function shoppingCartPrice(...num1){   // hence incase of multiple arguments and single parameters we use REST operator
    return num1;
}
// console.log(shoppingCartPrice(100));  // returns 100. after REST operator(return array with one element as 100)
// console.log(shoppingCartPrice(100, 200, 1000)); // what if multple parameters are passed?... output = 100 (only first parameter is considered as num1)
                                                // return array containing all the elements.

    const user ={
        username : "Aadi",
        price : 199
    }

    function handleObj(anyobject){
        console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    }

    // handleObj(user);

    handleObj({               // another way... declare object as an argument.
        username : "Aadi",
        price : 199
    })

    const mynewArray = [200, 400, 600];

    function return2value(array){
        return array[1];
    }
    // console.log(return2value(mynewArray))

    console.log(return2value([100, 200, 300, 400]));  // another way