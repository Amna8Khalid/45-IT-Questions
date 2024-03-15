// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message

class Shirt {
    constructor(public size: string = "large", public message: string = "I love TypeScript") {}
}

function createShirt(size: string = "medium", message: string = "I love TypeScript") {
    return new Shirt(size, message);
}

const largeShirt = createShirt();
console.log("Large Shirt:", largeShirt);

const mediumShirt = createShirt("medium");
console.log("Medium Shirt:", mediumShirt);

const smallShirt = createShirt("small", "Different message");
console.log("Small Shirt:", smallShirt);
