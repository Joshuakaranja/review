// // // // grab elements from dom
// // // const valueDisplay = document.getElementById('value');
// // // const incrementButton = document.getElementById('increase');
// // // const decrementButton = document.getElementById('decrease');

// // // //start value 
// // // let count = 0;

// // // //increase value

// // // incrementButton.addEventListener("click", () => {
// // //     count++;
// // //     valueDisplay.textContent = count;

// // // });

// // // //decrease value
// // // decrementButton.addEventListener("click", () => {
// // //     count--;
// // //     valueDisplay.textContent = count;

// // // });

// // // //reset value
// // // valueDisplay.addEventListener("dblclick", () => {
// // //     count = 0;
// // //     valueDisplay.textContent = count;

// // // });

// // // // create reset button
// // // const resetButton = document.createElement("button");
// // // resetButton.textContent = "Reset";
// // // document.getElementById("buttons").appendChild(resetButton);

// // // // create step input
// // // const stepInput = document.createElement("input");
// // // stepInput.type = "number";
// // // stepInput.value = 1;
// // // stepInput.min = 1;
// // // stepInput.style.marginLeft = "20px";
// // // document.getElementById("buttons").appendChild(stepInput);

// // // // update step value


// // const fruits = ["apple", "banana", "cherry", "date", "elderberry"];

// // // use classic for loop to log each fruit

// // // for (let i = 0 ; i < fruits.length ; i ++){
// // //     console.log(fruits[i]);
// // // }

// // // use for ... of loop to log each fruit

// // // for (let fruit of fruits){
// // //     console.log(fruit);
// // // }

// // // use for each method to log each fruit

// // // fruits.forEach((fruit)=>{
// // //     console.log(fruit);
// // // });

// // //use .map() method to create a new array with each fruit in uppercase

// // const upper = fruits.map(fruit =>fruit.toUpperCase());
// // console.log(upper);

// // // use .filter() method to create a new array with fruits that have more than 5 letters

// // const longNames = fruits.filter(fruit => fruit.length > 5);
// // console.log (longNames);



// // const users = [
// //   { name: "Sam", age: 17 },
// //   { name: "Jane", age: 21 },
// //   { name: "Mike", age: 15 },
// //   { name: "Anna", age: 30 }
// // ];
// // // .forEach() method to log each user's name and age

// // users.forEach(user =>{
// //     console.log (`${user.name} is ${user.age} years old`);
// // });

// // // .map() method to create a new array with just the names of the users

// // const names = users.map(user => user.name);
// // console.log(names);

// // // .filter() method to create a new array with users who are 18 or older

// // const adults = users.filter(user => user.age >= 18);
// // console.log(adults);

// // // .reduce() method to calculate the total age of all users

// // const totalAge = users.reduce((total, user)=> total + user.age, 0 );
// // console.log(totalAge);

// // // .find() method to find the first user who is under 18

// // const senior = users.find(user => user.age < 18);
// // console.log(senior);

// //Array destructuring

// const fruits = ["apple", "banana", "mango"];
// const [ first, second, third] = fruits;
// console.log(first, second, third); // apple banana mango

// const user = {
//     name: "John",
//     age: 25,
//     city: "New York"
// };

// const {name, age, city} = user;
// console.log(name, age, city);// John 25 New York

// // skipping elements
// const numbers = [1, 2, 3, 4, 5];
// const [one, , three, , five] = numbers;
// console.log(one, three, five);// 1 3 5

// // default values
// const colors = ["red"];
// const [primary, secondary = "blue"] = colors;
// console.log(primary, secondary);// red blue

// // nested destructuring
// const person = {
//     name: "Alice",
//     address: {
//         street: "123 Main St",
//         city: "Wonderland"
//     }
// };

// const {name: personName, address: {street, }} = person;
// console.log(personName, street, city);// Alice 123 Main St Wonderland

// // function parameter destructuring
// function greet({name, age}){
//     console.log(`Hello, my name is ${name} and I am ${age} years old.`);
// }
// greet({name: "Bob", age: 30});// Hello, my name is Bob and I am 30 years old.

// // object destructuring with rest operator
// const {name: userName, ...rest} = user;
// console.log(userName); // John
// console.log(rest); // { age: 25, city: 'New York' }


// use the api data below and destructure it to grab the following values


// const apiResponse = {
//   status: "success",
//   data: {
//     user: {
//       id: 101,
//       name: "John Doe",
//       email: "john@example.com",
//       address: {
//         city: "Nairobi",
//         country: "Kenya"
//       }
//     },
//     posts: [
//       { id: 1, title: "Hello World" },
//       { id: 2, title: "Learning JavaScript" }
//     ]
//   }
// };
// const {status, data: {user: {id , name,email, address:{city, country}}, posts: [{id: postId1, title: postTitle1}, {id: postId2, title: postTitle2}]}} = apiResponse;
// console.log(status); 
// console.log(id); 
// console.log(name); 
// console.log(email);
// console.log(city); 
// console.log(country);
// console.log(postId1); 
// console.log(postTitle1); 
// console.log(postId2); 
// console.log(postTitle2);


// console.log(apiResponse);

// // expected output
// // success
// // 101
// // John Doe


//  use the api below to extract 
//Extract username and fullName

// Extract the email but rename it to userEmail

// Extract the first project title

// Extract the first two techs of the second project into variables mainTech1 and mainTech2

// const apiResponse = {
//   status: "success",
//   data: {
//     user: {
//       id: 102,
//       username: "coder123",
//       profile: {
//         fullName: "Jane Doe",
//         contacts: {
//           email: "jane@example.com",
//           phone: "+254700000000"
//         }
//       }
//     },
//     projects: [
//       { id: 1, title: "Portfolio Website", tech: ["HTML", "CSS", "JS"] },
//       { id: 2, title: "E-Commerce App", tech: ["React", "Node", "MongoDB"] }
//     ]
//   }
// };
// const { status , data :{ user :{id , username, profile :{ fullName, contacts :{ email , phone}}} , projects :[{ id : projectId1, title : projectTitle1 , tech : [ mainTech1, mainTech2 , mainTech3]},{ id : projectId2, title : projectTitle2 , tech : [ secondTech1, secondTech2 , secondTech3]}]}} = apiResponse;
// console.log(status);
// console.log(username);
// console.log(fullName);
// console.log(email);
// console.log(projectTitle1);
// console.log(mainTech1);
// console.log(mainTech2);
// console.log(secondTech1);
// console.log(secondTech2);

// // expected output

// DOM in javascript

// Select the <h1> and change its text to:
// "DOM is powerful!"

// Add an event listener on the Change Title Color button to change the <h1> color to blue when clicked.

// Add an event listener on the Add List Item button to create a new <li> with text "New Item" and append it to the list.

// const header = document.getElementById("title");
// header.textContent = "DOM is powerful!";

// const change = document.getElementById("changeColor");
// change.addEventListener("click", () => {
//     header.style.color = "blue";
// });

// const addItemButton = document.getElementById("addItem");
// const list = document.getElementById("list");

// addItemButton.addEventListener("click", () => {
//     const newItem = document.createElement("li");
//     newItem.textContent = "New Item";
//     list.appendChild(newItem);
// });

// Grab elements (taskInput, addTask, taskList).

// When clicking Add Task:

// Create a new <li> element.

// Set its text to whatever is inside the input.

// Append it to the taskList.

// Add a click event to toggle "done" (use style.textDecoration = "line-through").

// Add a Delete button inside each <li> to remove the task.

const taskInput = document.getElementById("taskInput");
const addTask = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTask.addEventListener("click", () => {
    const newTask = document.createElement("li");
    newTask.textContent = taskInput.value;
    taskList.appendChild(newTask);
    taskInput.value = "";

    newTask.addEventListener("click", () => {
        newTask.style.textDecoration = newTask.style.textDecoration === "line-through" ? "none" : "line-through";
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    newTask.appendChild(deleteButton);

    deleteButton.addEventListener("click", () => {
        taskList.removeChild(newTask);
    });
});
