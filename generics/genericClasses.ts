// A generic class allows you to create reusable, type-safe classes.


class Container<T> {
    private _value: T;
  
    constructor(value: T) {
      this._value = value;
    }
  
    getValue(): T {
      return this._value;
    }
  
    setValue(value: T): void {
      this._value = value;
    }
  }
  
  const stringContainer = new Container<string>("Hello");
  console.log(stringContainer.getValue()); // Output: Hello
  
  const numberContainer = new Container<number>(123);
  console.log(numberContainer.getValue()); // Output: 123
  