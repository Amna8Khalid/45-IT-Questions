// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned

function cityCountry(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Calling the cityCountry function with different city-country pairs
const city1 = cityCountry("Lahore", "Pakistan");
console.log(city1);

const city2 = cityCountry("Paris", "France");
console.log(city2);

const city3 = cityCountry("Tokyo", "Japan");
console.log(city3);
