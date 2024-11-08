"use strict";
//1. String
let lname = 'srita'; //type inference
let fname;
fname = 'santosh';
let newname = fname.toUpperCase();
console.log(newname);
// lname = 10; //this will give error but in javascript it won't , that's why typescript is a strong typed language
//2. Number
let age;
age = 25;
age = 25.5;
let dob = "234"; //type inference
let res = parseInt(dob); //type inference
//3. Boolean
let isValid = false;
console.log(isValid); // will come undefined and also compile error would come if you dont define the boolean initially
//4. Array
let empList = []; //this is how we define array in javascript also 
empList = ['Santosh', 'Amy', 'Liley', 1]; //no error coming there even though different data types
// two ways to define array is below 
let empList1;
empList1 = ['Santosh', 'Amy', 'Liley']; //error coming here if we add 1 like above because only strings allowed
let empList2;
empList2 = [1, 234, 34, 12, 2];
let result = empList2.filter((num) => num > 2);
console.log(result);
let result1 = empList2.find((num) => num === 2);
console.log(result1);
let result2 = empList1.find((str) => str === 'Liley');
console.log(result2);
// one more thing to run if you downloaded locally the typescript instead of tsc --init , tsc --version , tsc simply add npx infront of them also like npx tsc then it will work 
