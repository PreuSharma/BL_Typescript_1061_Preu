
// **Type Inference in TypeScript**

//- TypeScript can **infer the type** of a variable based on the value assigned to it.  
//- This means you don’t always need to explicitly specify the type.  

//**Example:**

let message = "Hello"; // TypeScript infers the type as string
//message = 42; // Error: Type 'number' is not assignable to type 'string'

let count = 10; // Inferred as number