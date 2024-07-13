const desriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(desriptor);

// Output  // {
    //     value: 3.141592653589793,
    //     writable: false,
    //     enumerable: false,
    //     configurable: false
    //   }

Object.defineProperty(Math, "PI", {
    writable: true,
    enumerable: true
})
console.log(desriptor);
// TypeError: Cannot redefine property: PI


// console.log(Math.PI);
// Math.PI = 4;
// console.log(Math.PI);  //same result.

const chai = {
    name: "Ginger Chai",
    price: 250,
    isAvailable : true,

    orderChai: function(){    // not acceptable kyunki sirf key value pairs hi print karwane hain, isiliye ek condition check daal rhe hain.
        console.log("Chai nahi bani");
    }
}
// console.log(chai);

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

//output 

// {
//     value: 'Ginger Chai',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }

Object.defineProperty(chai, "name", {
    // writable: false,
    enumerable: false    // ab name pe iteration nahi ho rhi hai
});
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));
//output. 
// {
//     value: 'Ginger Chai',
//     writable: false,
//     enumerable: false,
//     configurable: true
//   }

for (const [key, value] of Object.entries(chai)) {  // directly objects (chai ) are not iterable, instead we use Object.entries(chai);
    if(typeof value !== 'function'){
        // console.log(`${key} : ${value}`)
    }
}
