//IN JAVASCRIPT WE CAN DECALARE VARIABLE USING 3 WAYS :
//1.BY USING VAR => globally scoped
//2.BY USING LET => block scoped
//3.BY UUSING CONST => block scoped

var myName = "Nitish Raj";
console.log(myName);

//cannot redeclare the const variable
// const myName = [];
// console.log(myName);
// myName.append("Nitish");
// console.log(myName);

let myName1 = "Nitish";
console.log(myName1);
myName1 = "Nitish Raj";
console.log(myName1);

//cannot redeclare the let variable
// let myName1 = "John";

var myname2 = "Nitish";
console.log(myname2);
var myname2 = "Nitish Raj";
console.log(myname2);

//we don't want var in the global scope

//Function
// function sum(num1,num2){
//     var num = 5;
//     return num1+num2;
// }

//here we know that var is globally scoped but along with that it is also function scoped which will create error.
// console.log(num);

//VERY VERY IMPORTANT TOPIC 
//String Pollation

let firstName = "Nitish";
let lastName = "Raj";

console.log(firstName + " " + lastName);

 //let fullName = firstName + " " + lastName;
 let fullName = `${firstName} ${lastName}`;
 console.log(fullName);

 // Default Params
// function add TwoNumbers (num1, num2) {
// return num1 + num2;
// }
// console.log(addTwoNumbers(1, 2));|  

//arrow function
// let addTwoNumbers = (num1, num2) => num1 + num2;
// console.log(addTwoNumbers (1, 2));

let addTwoNumbers= (num1, num2) => {
console.log(num1);
console.log(num2);
return num1 + num2;
};
console.log(addTwoNumbers (1));

// Rest and Spread Operator are applicable in Arrays and Objects in js

let array = [5, 10, 15, 20, 25];
// Spread ->...
let newArray = [...array, 30, 35, 40];
console.log(array); 

// Rest ->
// let maxOfTwoNumbers = (num1, num2) => Math.max (num1,num2);
// let maxOfThreeNumbers= (num1, num2, num3) => Math.max(num1, Math.max(num2,num3));
let maxOfNumbers= (...numbers) => {
let maximum = Number.MIN_VALUE;
for (let number of numbers) {
maximum = Math.max(maximum, number);
}
return maximum;
};
console.log(maxOfNurs(1, 2, 3, 4, 5, 6, 7, 8, 9,10));

// [[5, 10,15, 20, 25]][[5, 10,15, 20, 25]][0][0][0][0]
//    array                 newArray

// For Object
let object = {
name: "John",
age: 24,
city: "New York",
};

let object2 = {...object};
object2.address.city ="Newark"; // shallow cloning 
console.log(object2);

//Deep Cloning
// let object2 = JSON.parse(JSON.stringify (object));