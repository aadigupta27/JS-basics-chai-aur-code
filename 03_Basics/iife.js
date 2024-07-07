// Immediately Invoked Function Expression (IIFE)

// Its is preffered to provide protection from pollution caused by global variables...In this function itself gets wrapped up in the refrence section

(function chai(){  // named IIFE
    console.log("DB connected");
})();                                // iife function doesnt know where exactly the function is needed to stop.Thats why, we use ;

( (name) => {       // un-named IIFE
    console.log(`DB connected successfully, ${name}`);
})(`Aadi`);   // parameters and arguments...treat it just like another function. 
