//You can restrict the types allowed in generics using extends. 
// This ensures the type meets specific criteria.


function merge<T extends object, U extends object>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
  }
  
  const result = merge({ name: "Alice" }, { age: 30 });
  console.log(result); // Output: { name: "Alice", age: 30 }
  
  // Error: Number is not an object
  // merge(42, { age: 30 });
  