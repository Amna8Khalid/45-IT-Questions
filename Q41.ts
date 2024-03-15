// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array

function showMagicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
}

const magicians: string[] = ["Severus Snape", "Harry Potter", "Albus Dumbledore", "Hermione"];

showMagicians(magicians);
