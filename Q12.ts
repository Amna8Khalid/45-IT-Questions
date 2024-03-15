// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

const mytrans: string [] = ["Car", "Bike", "Bus", "Cycle"];

// 1st method

// for(let i = 0; i< mytrans.length; i++){
// [ console.log(`i would like to own a ${mytrans[i]}`)];}

// 2nd method
 
mytrans.map((ib)=>{
    console.log(`i would like to own a ${ib}`)
});