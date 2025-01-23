// Sometimes, you want to provide a default type so the user doesn’t have to specify it.

interface Storage2<T = string> {
    value: T;
  }
  
  const defaultStorage: Storage2 = { value: "Default" }; // T defaults to 'string'
  const numberStorage: Storage2<number> = { value: 42 }; // T is 'number'
  



