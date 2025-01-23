//A generic function allows you to create a reusable function that works with different types.

function identity<T>(value: T): T {
    return value;
  }
  
  // Now, you decide the type when you call it:
  const num = identity<number>(42); // T is 'number'
  const str = identity<string>("Hello"); // T is 'string'
  

/*With generics:

  The return type matches the input type.
  TypeScript checks your input/output types.

*/

// Example with Type Inference
// You don’t always need to specify the type. TypeScript can infer it:

const inferredNum = identity(100); // T is automatically 'number'
const inferredStr = identity("Hi!"); // T is automatically 'string'
