//A tuple is a special type of array in TypeScript that allows you to define the exact number and types of elements.
//Unlike regular arrays, the order and types of elements in tuples are fixed.
//Syntax
//let tupleName: [Type1, Type2, ...];
//Example:
var user = ["Alice", 25];
console.log(user[0]); // "Alice" (string)
console.log(user[1]); // 25 (number)
// Invalid assignment
// user[0] = 42; // Error: Type 'number' is not assignable to type 'string'
