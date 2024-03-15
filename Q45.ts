function carDetails (manuFacturer: string, modelName: string, ... additionalInfo: (string | number)[][]){

 const car = {manuFacturer, modelName, ...Object.fromEntries
(additionalInfo)};
return car;
 };

const mycarDetails = carDetails("Toyota", "Corolla", ['color', 'white'],['year' , 2022]);

console.log(mycarDetails)