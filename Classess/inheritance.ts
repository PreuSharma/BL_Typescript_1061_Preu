//TypeScript supports inheritance using the extends keyword. 
// Subclasses inherit members and methods from their parent classes.

class Vehicle {
    brand: string;
  
    constructor(brand: string) {
      this.brand = brand;
    }
  
    start(): void {
      console.log(`${this.brand} is starting...`);
    }
  }
  
  class Car extends Vehicle {
    doors: number;
  
    constructor(brand: string, doors: number) {
      super(brand); // Call the parent class constructor
      this.doors = doors;
    }
  
    honk(): void {
      console.log(`${this.brand} is honking.`);
    }
  }
  
  const car = new Car("Toyota", 4);
  car.start(); // Output: Toyota is starting...
  car.honk();  // Output: Toyota is honking.
  