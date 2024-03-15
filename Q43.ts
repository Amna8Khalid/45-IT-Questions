// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name. 

// Define the function to add 'Great' to each magician's name

function makeGreat(magicians: any[]) {
    return magicians.map((magician: any) => `Great ${magician}`);
}

// Define a function to display magicians
function showMagicians(magicians: any[]) {
    magicians.forEach((magician: any) => console.log(magician));
}

// Main function
function main() {
    // Original array of magicians' names
    const magicians = ['Severus Snape', 'Dumbledore', 'Harry Potter'];

    // Make a copy of the array and add 'Great' to each magician's name
    const greatMagicians = makeGreat([...magicians]);

    // Display both arrays
    console.log("Original Magicians:");
    showMagicians(magicians);
    console.log("\nGreat Magicians:");
    showMagicians(greatMagicians);
}

// Call the main function
main();
