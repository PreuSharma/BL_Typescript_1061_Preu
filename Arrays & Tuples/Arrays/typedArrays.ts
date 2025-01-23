//Typed Arrays
//A typed array allows you to specify the type of elements an array can hold.
//You can use one of the following notations to declare a typed array:

//Syntax:
//let arrayName: Type[];
// OR
//let arrayName: Array<Type>;

//Example:
let numbers: number[] = [1, 2, 3, 4]; // Array of numbers
let strings: string[] = ["Alice", "Bob", "Charlie"]; // Array of strings

// Using Array<Type>
let booleans: Array<boolean> = [true, false, true];

// Invalid assignments
// numbers.push("text"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.




//Mixed-Type Arrays
//If you want to allow different types in an array, you can use a union type.

let mixedArray: (number | string)[] = [1, "two", 3, "four"];
