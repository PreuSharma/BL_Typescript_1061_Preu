//An abstract class serves as a blueprint for derived classes. 
// It cannot be instantiated directly and may contain abstract methods that must be implemented in subclasses.




abstract class Animal {
    abstract sound(): void; // Abstract method (no implementation)
  
    move(): void {
      console.log("Moving...");
    }
  }
  
  class Dog extends Animal {
    sound(): void {
      console.log("Woof! Woof!");
    }
  }
  
  const dog = new Dog();
  dog.sound(); // Output: Woof! Woof!
  dog.move();  // Output: Moving...
  