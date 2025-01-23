//Basic Types in TypeScript:
//1. string     :  Represents text.
var s = "John";
//2. number     :  Represents numbers (both integers and floating-point values).
var age = 25;
//3. boolean    :  Represents true or false.
var isActive = true;
//4. null       :  Represents the intentional absence of a value.
var emptyValue = null;
//5. undefined  :  Represents an uninitialized variable.
var notAssigned = undefined;
//6. any        :  A flexible type that can hold any value. It disables TypeScript’s type-checking for that variable.
var flexible = 42;
flexible = "Now I'm a string!";
//7.unknown     :  Similar to any, but safer. You must check the type of a value before using it.
var uncertain = "Hello";
