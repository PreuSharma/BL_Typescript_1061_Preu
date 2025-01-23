// you can add types to functions for input (parameters) and output (return values).
/*


Function Types and Return Types:

Function types allow you to define the type of arguments a function accepts and the type of value it returns.
Return type is defined after the parameter list using : Type 
*/

//Example 1: parameter type

function add5(a: number, b: number): number {
    return a + b; // TypeScript ensures this returns a number
  }
  

//Example 2: void type
function logMessage5(message: string): void {
    console.log(message);
}
  

