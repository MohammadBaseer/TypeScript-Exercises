console.log("hello ts");

function hi() {
  return "hi there";
}
// console.log(hi());

//? ============================= IMPLICIT TYPING
let myNumber = 5;
// myNumber = "some string"

let myBoolean = true;
// myBoolean =["asdasd"]

//? ============================= EXPLICIT TYPING

let userName: string;
userName = "user22";
// userName = 4

let isTrue: boolean;
isTrue = true;
// isTrue = {name:"asdasd"}

function sum() {
  let a = 2;
  const b = 5;

  let result = a + b;
}

function sum2(paramA: number, paramB: number) {
  var result = paramA * paramB;
}

//? ============================= UNION
// Union types are used when a value can be more than a single type.
// Such as when a property would be string or number.
// Using the | we are saying our parameter is a string or number:
// =============================
let dateValue: string | number;
dateValue = "Monday";
dateValue = 234242344;
// dateValue = false

let webMentor: "Emily" | "Raul";
// webMentor = "Killian";

//? ============================= INTERFACE
// TypeScript allows types to be defined separately from the variables that use them.
// Aliases and Interfaces allows types to be easily shared between different variables/objects.
// Interfaces are similar to type aliases, except they only apply to object types.
// =============================
interface WebStudent1 {
  name: "Baseer" | "Rahimi";
  course: "Web" | "DataSceince";
  duration: number;
  time?: number; // optional property
}

const SectionA: WebStudent1 = {
  name: "Baseer",
  time: 555,
  course: "DataSceince",
  duration: 5,
};
// console.log(SectionA);

// Extending an interface means you are creating a new interface with the same properties as the original, plus something new.
interface WebStudent2 extends WebStudent1 {
  hasLaptop: boolean;
  addres: number | string;
}

const SectionB: WebStudent2 = {
  name: "Rahimi",
  course: "DataSceince",
  duration: 5,
  addres: "Berlin " + 123,
  hasLaptop: false,
};
// console.log(SectionB);

//* ============================= Index Signature

type Models = {
  [key: string]: number | string;
};

const car: Models = {
  car1: "BMW",
  car2: 123,
};
// console.log(car);
