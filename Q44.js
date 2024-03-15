"use strict";
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time
Object.defineProperty(exports, "__esModule", { value: true });
function orderSandwich(items) {
    console.log("Let's make your perfect sandwich!");
    if (items.length === 0) {
        console.log("Hmm... it seems you haven't chosen any items for your sandwich.");
    }
    else {
        console.log("Here's what's inside your sandwich:");
        items.forEach(item => console.log("- " + item));
    }
}
// Time to order some sandwiches!
orderSandwich(["Cheese", "Lettuce", "Tomato"]);
orderSandwich(["Chicken", "Cheese", "Pickles"]);
orderSandwich(["Peanut Butter", "Jelly"]);
