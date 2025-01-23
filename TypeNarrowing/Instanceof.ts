class Dog1 {
    bark() {
        console.log("Woof!");
    }
}

class Cat1 {
    meow() {
        console.log("Meow!");
    }
}

function makeSound(animal: Dog1 | Cat1) {
    if (animal instanceof Dog1) {
        animal.bark();
    } else if (animal instanceof Cat1) {
        animal.meow();
    }
}

const dog2 = new Dog1();
const cat = new Cat1();

makeSound(dog2); // Output: Woof!
makeSound(cat); // Output: Meow!
