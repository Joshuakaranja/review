// // grab elements from dom
// const valueDisplay = document.getElementById('value');
// const incrementButton = document.getElementById('increase');
// const decrementButton = document.getElementById('decrease');

// //start value 
// let count = 0;

// //increase value

// incrementButton.addEventListener("click", () => {
//     count++;
//     valueDisplay.textContent = count;

// });

// //decrease value
// decrementButton.addEventListener("click", () => {
//     count--;
//     valueDisplay.textContent = count;

// });

// //reset value
// valueDisplay.addEventListener("dblclick", () => {
//     count = 0;
//     valueDisplay.textContent = count;

// });

// // create reset button
// const resetButton = document.createElement("button");
// resetButton.textContent = "Reset";
// document.getElementById("buttons").appendChild(resetButton);

// // create step input
// const stepInput = document.createElement("input");
// stepInput.type = "number";
// stepInput.value = 1;
// stepInput.min = 1;
// stepInput.style.marginLeft = "20px";
// document.getElementById("buttons").appendChild(stepInput);

// // update step value


const fruits = ["apple", "banana", "cherry", "date", "elderberry"];

// use classic for loop to log each fruit

// for (let i = 0 ; i < fruits.length ; i ++){
//     console.log(fruits[i]);
// }

// use for ... of loop to log each fruit

// for (let fruit of fruits){
//     console.log(fruit);
// }

// use for each method to log each fruit

// fruits.forEach((fruit)=>{
//     console.log(fruit);
// });

//use .map() method to create a new array with each fruit in uppercase

const upper = fruits.map(fruit =>fruit.toUpperCase());
console.log(upper);

// use .filter() method to create a new array with fruits that have more than 5 letters

const longNames = fruits.filter(fruit => fruit.length > 5);
console.log (longNames);



const users = [
  { name: "Sam", age: 17 },
  { name: "Jane", age: 21 },
  { name: "Mike", age: 15 },
  { name: "Anna", age: 30 }
];
// .forEach() method to log each user's name and age

users.forEach(user =>{
    console.log (`${user.name} is ${user.age} years old`);
});

// .map() method to create a new array with just the names of the users

const names = users.map(user => user.name);
console.log(names);

// .filter() method to create a new array with users who are 18 or older

const adults = users.filter(user => user.age >= 18);
console.log(adults);

// .reduce() method to calculate the total age of all users

const totalAge = users.reduce((total, user)=> total + user.age, 0 );
console.log(totalAge);

// .find() method to find the first user who is under 18

const senior = users.find(user => user.age < 18);
console.log(senior);