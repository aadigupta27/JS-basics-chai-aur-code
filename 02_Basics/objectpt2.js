// singleton and declaration of object using constructors...

// const user = new Object(); // example of a singleton object.
const user = {}; // again an empty object but its non-singleton.
user.Id = "abd123";
user.name = "Aadi Gupta";
user.isActive = false; 

// console.log(user);

const regularUser = {
    email: "aadi@gmail.com",
    name :{
        userfullname :{             //  nesting of objects is possible.
            firstName : "aadi",
            lastName : "Gupta",
            anyMiddleName : false
        }
    }
}
// console.log(regularUser);
// we use dot operator to access nested objects.

// console.log(regularUser.name.userfullname);  //output -- whole object of name userfullname.
// console.log(regularUser.name.userfullname.firstName); //output -- just my name


const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj3 = {5: "a", 6: "b"};

// just like arrays its used to combine multiple objects. {} is used in starting as all 
// the combining objects gets combined there. its a useful syntax, although result is same. 

// const obj4 = Object.assign({}, obj1, obj2, obj3); 
const obj4 = {...obj1, ...obj2, ...obj3}; // using spread operator. Same result is obtained.
console.log(obj4);

// An array can even contain objects.

const userOne = [
    {
        email: "aadi.com",
        name : "Aadi Gupta"
    },
    {
        email: "aadi.com",
        name : "Aadi Gupta"
    },
    {
        email: "aadi.com",
        name : "Aadi Gupta"
    }
]

// similarly whenever the keys or values are accessed from an object the items are stored in arrays.

console.log(Object.keys(user)); // gives arrays of keynames from user object.
console.log(Object.values(user)); // gives arrays of valuenames from user object.
console.log(Object.entries(user)); // gives arrays of combination of valuenames and keynames from user object.

console.log(user.hasOwnProperty("isActive")); // first verify whether the property is available or not

const course = {
    courseName: "Js in hindi",
    price :"999",
    courseInstructor : "Hitesh Sir"
}

// destructuring objects
// console.log(course.courseInstructor);

const {courseInstructor} = course;
const {courseInstructor: Instructor} = course;  // name can be changed as well. this is done to avoid using dot operator for everytime accessing the values of the object.

console.log(courseInstructor);
console.log(Instructor);

// JSON API

// {
//     "name" : "Aadi Gupta",
//     "courseName1" : "Js in hindi",      // JSON files are stored in this manner
//     "price" : "free"
// }

// we use randomUseMe API for API response and JSON Formatter tool to deeply understand the the API calling
// API's can be in form of arrays (Arrays of object)

[
    {},
    {},     // for example !
    {}
]