//How to use .map(), .foreach(), .filter() , .find(), .sort()

// Tomorrow we will learn
// .map(), .forEach(), filter(), .find(), .sort()
// Object Destructuring in JS Objects
// Array matching, Ob matching
// Maps/Set 1 min
// Classes in JS

// 1. .map()

// let array = [1, 2, 3, 4, 5];
// let newArray = [];
// for (let i = 0; i < array.length; i++) {
//  newArray[i] = array[i] * array[i];  //computational logic
// }
// console.log(newArray);

// let array = [5, 10, 15, 20];
// let newArray = array.map((element) => element * element);
// console.log(newArray);

// 2. .forEach()

// let array  = [1, 2, 3, 4, 5];
// array.forEach((element, index) => {
// element *= element
// console.log(element);});
// console.log("Array is :", array);


 // 3. .filter ()

// let array = [10, 20, 30, 40, 50];
// let newArray = array.filter((element) => element >= 30);
// console.log(newArray);

// 4. .find()

// let array = [10, 20, 30, 40, 50];
// let temp = array.find((value) => {return value > 20;});
// console.log(temp);

// 5. .sort()

// let array = [50, 40, 111, 30, 20, 10];
// let sortedArray = array.sort((ell, el2) => {
// ell = Number(ell);
// e12 = Number(el2);
// return ell - el2; });
// console.log(sortedArray);

//6. Object Destructuring

// let details = {
//    name: "Alex",
//    age: 24,
//   address:{
//      street: "Brooklyn",
//      city: "New York",
//      state: "NY",
//      country: "USA",
//    passportDetails:{
//      passportNumber: "CD1234",
//    },
//  }, 
// }
// let {name: myName, age} = details;
// console.log(myName,age);

//IMPORTANT
//7.Array Matching
// let {
// address: {
// country,
// passportDetails: { passportNumber}},} = details;
// console.log(country, portNumber);
// if (array1 == array2);

// VERY IMPORTANT
//7.Object Matching

// let obj1 = { name: "Shantanu",age:24 }; //Set [name]  
// let obj2 = { name: "Shantanu" }; 

// function areEqual (obj1,obj2) {  
// if (obj1 == obj2)
// {
// return true;
// }
// if(Object.keys (obj1).length != Object.keys (obj2).length) {
// return false;I
// }
// for(let key of Object.keys(obj1)){
//     if(typeof obj2[key]== "undefined"){
//         return false;
//     }
//     if(obj2[key] != obj1[key]){
//         return false;
//     }
// }
// return true;
// }
// console.log(areEqual(obj1,obj2));


//8. MAP AND SET

// let map = new Map();
// map.set(1,"Shantanu"); 
// map.set(2,"Alex");
// console.log(map);
// map.values();


let set = new Set();
set.add(1);
set.add(-1);
//add,delete,has(check any particular value is there or not)
console.log(set); 

//class

class Animal{
    noOfLegs;
    color;
    family;
    sound;

    constructor(noOfLegs,color,family,sound){
        this.noOfLegs = noOfLegs;
        this.color =color;
        this,family = family;
        this.sound = sound;
    }
}

let Animal = new Animal(4,"brown","rodent","something");