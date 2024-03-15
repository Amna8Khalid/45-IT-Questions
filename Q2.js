"use strict";
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase//
Object.defineProperty(exports, "__esModule", { value: true });
let person_name = "amna";
console.log(person_name.toLowerCase());
console.log(person_name.toUpperCase());
console.log(person_name.charAt(0).toUpperCase() + person_name.slice(1));
