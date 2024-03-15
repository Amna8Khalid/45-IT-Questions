"use strict";
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
Object.defineProperty(exports, "__esModule", { value: true });
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed
let myplaces = ["Karachi", "Dubai", "Quetta", "Maldives", "Paris"];
console.log(myplaces);
// making a copy of an array
let copyofarry = myplaces.slice();
let sortedarry = copyofarry.sort();
console.log(sortedarry);
// printing original array
// console.log(myplaces);
// reversing original array
//  first we have to make a copy of original array
let copyofarry2 = myplaces.slice();
let reverseOriarray = myplaces.reverse();
console.log(reverseOriarray);
// printing original array
console.log(myplaces);
// reverse the order of original array
let reverseOriarray2 = myplaces.reverse();
console.log(reverseOriarray);
let againReverse = reverseOriarray2.reverse();
console.log(againReverse); //same as orginal array
//  sorting original array
let sortOriarray = myplaces.sort();
console.log(sortOriarray);
let reversesortedArray = sortOriarray.reverse();
console.log(reverseOriarray);
