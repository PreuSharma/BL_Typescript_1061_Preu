//Static members belong to the class rather than any instance.
//  They are accessed using the class name.

class Calculator2 {
    static pi: number = 3.14159;
  
    static add(a: number, b: number): number {
      return a + b;
    }
  }
  
  console.log(Calculator2.pi); // Output: 3.14159
  console.log(Calculator2.add(5, 10)); // Output: 15
  