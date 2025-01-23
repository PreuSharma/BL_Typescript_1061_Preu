class Person3 {
    name: string; // Field
    age: number;  // Field
  
    constructor(name: string, age: number) {
      this.name = name; // Assign constructor parameters to fields
      this.age = age;
    }
  
    greet(): void {
      console.log(`Hi, I am ${this.name}, and I am ${this.age} years old.`);
    }
  }
  
  const p = new Person3("Alice", 30);
  p.greet(); // Output: Hi, I am Alice, and I am 30 years old.
  