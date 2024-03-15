"use strict";
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array
Object.defineProperty(exports, "__esModule", { value: true });
function showMagicians(magicians) {
    magicians.forEach(magician => console.log(magician));
}
const magicians = ["Severus Snape", "Harry Potter", "Albus Dumbledore", "Hermione"];
showMagicians(magicians);
