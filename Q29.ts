// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!



let favorite_fruits = ["apple" , "strawberry" , "orange"];
if(favorite_fruits.includes("watermelon")){
    console.log(`i would like to eat watermelon`);

}else if (favorite_fruits.includes("apple")){
    console.log(`i would like to eat apple`);
    
}else{
    console.log(`fruits are not availible!`)
}
