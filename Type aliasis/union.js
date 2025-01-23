"use strict";
//Union types allow a variable to have multiple possible types. 
// Use the | (pipe) operator to combine types.
let value2;
value2 = "Hello"; // OK
value2 = 42; // OK
const response = { error: "Something went wrong" };
const anotherResponse = { data: "Success!" };
//Type Narrowing with typeof:
function logValue(value) {
    if (typeof value === "string") {
        console.log("String value:", value.toUpperCase());
    }
    else {
        console.log("Number value:", value * 2);
    }
}
logValue("hello"); // Output: String value: HELLO
logValue(10); // Output: Number value: 20
