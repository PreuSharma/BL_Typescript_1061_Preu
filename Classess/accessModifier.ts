/*


Modifier	   Description
public	       Members are accessible from anywhere (default).
private	       Members are accessible only within the class.
protected	   Members are accessible within the class and its subclasses.
readonly	   Fields can only be initialized once (at declaration or in the constructor) and cannot be modified later.

*/


class Employee {
    public name: string;           // Accessible everywhere
    private salary: number;        // Accessible only within the class
    protected department: string;  // Accessible in the class and subclasses
    readonly id: number;           // Can only be initialized once
  
    constructor(name: string, salary: number, department: string, id: number) {
      this.name = name;
      this.salary = salary;
      this.department = department;
      this.id = id;
    }
  
    public getSalary(): number {
      return this.salary; // Access private member within the class
    }
  }
  
  class Manager extends Employee {
    constructor(name: string, salary: number, department: string, id: number) {
      super(name, salary, department, id);
    }
  
    showDepartment(): void {
      console.log(`Department: ${this.department}`); // Access protected member
    }
  }
  
  const manager = new Manager("John", 100000, "Sales", 1);
  console.log(manager.name); // OK
  // console.log(manager.salary); // Error: Private member
  // console.log(manager.department); // Error: Protected member
  // manager.id = 2; // Error: Cannot assign to 'id' because it is a read-only property
