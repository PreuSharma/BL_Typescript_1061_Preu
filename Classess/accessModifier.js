/*


Modifier	   Description
public	       Members are accessible from anywhere (default).
private	       Members are accessible only within the class.
protected	   Members are accessible within the class and its subclasses.
readonly	   Fields can only be initialized once (at declaration or in the constructor) and cannot be modified later.

*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(name, salary, department, id) {
        this.name = name;
        this.salary = salary;
        this.department = department;
        this.id = id;
    }
    Employee.prototype.getSalary = function () {
        return this.salary; // Access private member within the class
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, salary, department, id) {
        return _super.call(this, name, salary, department, id) || this;
    }
    Manager.prototype.showDepartment = function () {
        console.log("Department: ".concat(this.department)); // Access protected member
    };
    return Manager;
}(Employee));
var manager = new Manager("John", 100000, "Sales", 1);
console.log(manager.name); // OK
// console.log(manager.salary); // Error: Private member
// console.log(manager.department); // Error: Protected member
// manager.id = 2; // Error: Cannot assign to 'id' because it is a read-only property
