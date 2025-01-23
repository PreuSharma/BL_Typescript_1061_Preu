// **Unknown vs Any**
/*
| Feature           | **any**                                  | **unknown**                                            |
|-------------------|------------------------------------------|--------------------------------------------------------|
| **Type Checking** | No type-checking is enforced.            | Requires type-checking before usage.                   |
| **Safety**        | Not type-safe, may cause runtime errors. | Type-safe, prevents unintended behavior.               |
| **Flexibility**   | Can assign to any type.                  | Cannot assign directly to another type without checks. |
                   
*/
//any:
//Think of any as a "wildcard." It can hold any value, and TypeScript doesn’t care what you do with it.
//It doesn’t check for errors. This makes it flexible but risky.
//Example
var value;
value = "Hello"; // OK
value = 42; // OK
value = true; // OK
var number = value; // OK, but this can cause bugs if value is not actually a number
//unknown
//unknown is like a "safer any." It can hold any value BUT you can’t use it directly without checking its type first.
//This forces you to confirm the type before using the variable, making it safer.
//Example
var x;
x = "Hello"; // OK
x = 42; // OK
x = true; // OK
// let number: number = value; // Error! You must check the type first
if (typeof x === "number") {
    var number_1 = x; // Now it's safe because we checked the type
}
