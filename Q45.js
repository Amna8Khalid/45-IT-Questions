"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function carDetails(manuFacturer, modelName, ...additionalInfo) {
    const car = { manuFacturer, modelName, ...Object.fromEntries(additionalInfo) };
    return car;
}
;
const mycarDetails = carDetails("Toyota", "Corolla", ['color', 'white'], ['year', 2022]);
console.log(mycarDetails);
