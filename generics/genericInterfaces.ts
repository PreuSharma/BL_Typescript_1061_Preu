// A generic interface works like a contract for objects but allows flexibility with types.


interface Box<T> {
    value: T; // T can be any type
  }
  
  const stringBox: Box<string> = { value: "Hello" }; // T is 'string'
  const numberBox: Box<number> = { value: 42 }; // T is 'number'
  

  