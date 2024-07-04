const newDate = new Date();
// console.table([newDate.toString(), newDate.toDateString(), newDate.toISOString(), newDate.toJSON(), newDate.toLocaleDateString(), newDate.toLocaleString(), newDate.toLocaleTimeString()]);

let myTimeStamp = Date.now();
// console.log(myTimeStamp);

const nextDate = new Date();
console.log(nextDate.toLocaleString('default', {
//    weekday: "long"
// timeZoneName: "long"
// hour :"numeric"
}));
console.log(Math.floor((newDate.getTime())/(3600*24*7*30*12)));
