
//Basic Types in TypeScript:

//1. string     :  Represents text.
let s: string = "John";

//2. number     :  Represents numbers (both integers and floating-point values).
                   let age: number = 25;

//3. boolean    :  Represents true or false.
                   let isActive: boolean = true;

//4. null       :  Represents the intentional absence of a value.
                   let emptyValue: null = null;

//5. undefined  :  Represents an uninitialized variable.
                   let notAssigned: undefined = undefined;

//6. any        :  A flexible type that can hold any value. It disables TypeScript’s type-checking for that variable.
                   let flexible: any = 42;
                   flexible = "Now I'm a string!";

//7.unknown     :  Similar to any, but safer. You must check the type of a value before using it.
                   let uncertain: unknown = "Hello";


// primitive -string,number , boolean
// special -null,undefined,any,unknown