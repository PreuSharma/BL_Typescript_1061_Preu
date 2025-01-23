/*

1. What is TypeScript?

TypeScript is an advanced version of JavaScript. 
It adds a "type system" (data-types) to JavaScript.
This means if you say a variable should be a number, TypeScript will make sure only numbers are used. If you try to use a string by mistake, it will give you an error.
TypeScript code needs to be converted into JavaScript using a compiler (called tsc), and then you can run the JavaScript code like you would with any normal JavaScript file.




2. Advantages and Disadvantages of TypeScript

Advantages:

1. Fewer Errors: TypeScript helps catch mistakes before running the code. For example, if you try to store a string in a variable that is supposed to be a number, it will show an error early.
2. Easier to Understand Code: TypeScript helps you organize big projects better using features like classes, types, and interfaces.
3. Better Tools: Editors like Visual Studio Code give you better suggestions, error checking, and auto-completion when you write TypeScript.

Disadvantages:

1. Learning Curve: If you are used to JavaScript, TypeScript's extra features like types can be a bit hard to understand at first.
2. Extra Step: TypeScript code needs to be converted into JavaScript first, which takes extra time.





3. How Do You Run Code in TypeScript?

First, you need to convert TypeScript into JavaScript using the tsc compiler.
Then, you can run the generated JavaScript file in the browser or using Node.js, just like any other JavaScript file.



4. Difference Between TypeScript and JavaScript

Type Checking: In TypeScript, you define what type of data (like a string, number, etc.) a variable should hold. In JavaScript, there's no such rule—you can store anything in any variable.
Compilation: TypeScript needs to be converted to JavaScript first before running it. JavaScript can run directly without conversion.
Extra Features: TypeScript has advanced features like interfaces and enums that aren't in regular JavaScript.


Example:

TypeScript:               let name: string = "John";


JavaScript:               let name = "John";


*/