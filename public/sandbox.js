"use strict";
const loginDetails = (uid, item) => {
    console.log(`${item} has a uid ${uid}`);
};
loginDetails(2, "bread");
const greet = (user) => {
    console.log(`${user.name}`);
};
greet({
    name: "prosper",
    uid: 2,
});
/*

//BEGINNING
// / let character = "mario";
// let age = 30;
// let isBlackBelt = true;

// console.log(character);

// const inputs = document.querySelectorAll("input");

// // console.log(inputs);

// inputs.forEach((el) => {
//   console.log(el);
// });

// character = "prosper";
// age = 5;
// isBlackBelt = false;

// const circ = (diameter: number) => {
//   return diameter * Math.PI;
// };

// console.log(circ(7.5));

//ARRAYS

// let names = ["prosper", "prince", "presh"];
// names = [];

// // names.push("charles");
// console.log(names);

// // names.push(8);
// console.log(names);

// let mixed = ["prosper", 5, "prince", 6, "presh", true];
// // mixed = ["prprpr", "prprppr"];
// mixed.push("hello");
// mixed[0] = 1;
// console.log(mixed);

//OBJECTS

// let ninja = {
//   name: "mario",
//   belt: "black",
//   age: 30,
// };

// ninja = {
//   name: "j",
//   belt: "blue",
//   age: 10,
// };

// ninja.name = "prosper";
// ninja.age = 6;

// console.log(ninja);

*/
/*

//EXPLICIT TYPES

let character: string = "hello";
let age: number;
let isLoggedIn: boolean;

// character = "hiiiii";
age = 20;
isLoggedIn = true;
console.log(character);

//ARRAYS
let ninjas: string[] = [];

ninjas = ["prosper", "princewill", "precious"];

ninjas.push("jennifer");

console.log(ninjas);

//UNION TYPES

let mixed: (string | number | boolean | {} | null)[] = [];

mixed = [2, "hello", { name: "fool" }, true, ""];

console.log(mixed);

//union type for variables

let uid: string | number | string[];
uid = 20;
uid = "prosper";
uid = ["2", "4"];

//Explicit types for objects

let ninjaOne: object;

ninjaOne = {
  name: "prosper",
  age: 11,
  beltColor: "blue",
};

let ninjaTwo: {
  name: string;
  age: number | string;
  beltColor: string;
};

ninjaTwo = {
  name: "prosper",
  age: "twenty",
  beltColor: "black",
};

console.log(ninjaTwo);

*/
/*

//ANY TYPE

let age: any = 25;

age = "twenty three";

console.log(age);

age = "string";

age = {
  name: "prosper",
};

console.log(age);

let mixed: any[] = [];
mixed = ["a", "b", 4, 588];

console.log(mixed);

let ninja: {
  name: any;
  age: any;
};

ninja = {
  name: "clinton",
  age: 20,
};

*/
/*
//FUNCTIONS

let greet: Function;

greet = () => {
  console.log("hello");
};

const add = (a: number, b: number, c: number | string = 20) => {
  console.log(a + b);
  console.log(c);
};

add(5, 10);

const minus = (a: number, b: number): number => {
  return a - b;
};

let result = minus(100, 70);

console.log(result);
*/
