
// Arrow Functions
//Arrow functions are a shorter syntax for writing functions. They are often used for callbacks or inline functions.
//The this keyword in an arrow function refers to the context where the function is defined, not where it's called.


// Normal function
function square(x: number): number {
    return x * x;
  }
  
  // Arrow function
  const squareArrow = (x: number): number => x * x;
  
  console.log(square(5));       // Output: 25
  console.log(squareArrow(5));  // Output: 25
  