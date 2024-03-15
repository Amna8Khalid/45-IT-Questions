"use strict";
// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country
Object.defineProperty(exports, "__esModule", { value: true });
function describeCity(cityName, countryName = "Japan") {
    console.log(`${cityName} is in ${countryName}.`);
}
// Calling describeCity function for three different cities
describeCity("Karachi", "Pakistan");
describeCity("London", "United Kingdom");
describeCity("New York"); // Default country will be used
