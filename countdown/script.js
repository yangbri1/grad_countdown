// this returns today's date in milliseconds since January 1, 1970
// const now = new Date();
// const timeInMilliseconds = now.getTime();
// console.log(timeInMilliseconds);

// use JavaScript's built-in Date.now() method to retrieve today's date in milliseconds since Jan 1, 1970 
const today_milli = Date.now(); // this update dynamically whenever we run "script.js"

// create a new Date object for graduation date
let graduation = new Date("November 29, 2024");

// convert the graduation date to milliseconds since Unix Epoch
let graduation_milli = graduation.getTime();
// console.log(graduation_milli);

// number of milliseconds from graduation to today
let difference_milli = graduation_milli - today_milli;

// number of milliseconds in a day
let day_milli = 86400000;

// number of days left until graduation
let difference_days = Math.floor(difference_milli / day_milli);

// console.log(`There are ${difference_days} left until graduation from Per Scholas`);
console.log(`There are`, difference_days, `left until graduation from Per Scholas`);