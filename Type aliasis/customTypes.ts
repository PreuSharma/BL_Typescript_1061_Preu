//A type alias in TypeScript is used to define custom types. 
// It's a way to create reusable and meaningful type definitions for complex or repetitive types, 
// making the code more readable and maintainable.



// Defining Custom Types using type
//The type keyword is used to create a type alias.

type Name = string;
type Age = number;

const personName2: Name = "Alice";
const personAge2: Age = 25;



//Example with Objects:

type Person = {
    name: string;
    age: number;
  };
  
  const person2: Person = {
    name: "Bob",
    age: 30,
  };

  

//Example with Functions:

type MathOperation = (a: number, b: number) => number;

const add: MathOperation = (x, y) => x + y;
console.log(add(5, 3)); // Output: 8



