//Typed Arrays
//A typed array allows you to specify the type of elements an array can hold.
//You can use one of the following notations to declare a typed array:
//Syntax:
//let arrayName: Type[];
// OR
//let arrayName: Array<Type>;
//Example:
var numbers = [1, 2, 3, 4]; // Array of numbers
var strings = ["Alice", "Bob", "Charlie"]; // Array of strings
// Using Array<Type>
var booleans = [true, false, true];
// Invalid assignments
// numbers.push("text"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
//Mixed-Type Arrays
//If you want to allow different types in an array, you can use a union type.
var mixedArray = [1, "two", 3, "four"];
