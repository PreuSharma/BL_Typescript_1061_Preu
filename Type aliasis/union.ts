//Union types allow a variable to have multiple possible types. 
// Use the | (pipe) operator to combine types.


type StringOrNumber = string | number;

let value2: StringOrNumber;

value2 = "Hello"; // OK
value2 = 42;      // OK
// value2 = true; // Error: Type 'boolean' is not assignable to type 'string | number'.




//Using Unions in Objects:
type ErrorResponse = {
    error: string;
  };
  
  type SuccessResponse = {
    data: string;
  };
  
  type ApiResponse = ErrorResponse | SuccessResponse;
  
  const response: ApiResponse = { error: "Something went wrong" };
  const anotherResponse: ApiResponse = { data: "Success!" };

  




//Type Narrowing with typeof:
  function logValue(value: string | number): void {
    if (typeof value === "string") {
      console.log("String value:", value.toUpperCase());
    } else {
      console.log("Number value:", value * 2);
    }
  }
  
  logValue("hello"); // Output: String value: HELLO
  logValue(10);      // Output: Number value: 20
  