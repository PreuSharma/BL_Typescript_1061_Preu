//TypeScript supports inheritance using the extends keyword. 
// Subclasses inherit members and methods from their parent classes.
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
var Vehicle = /** @class */ (function () {
    function Vehicle(brand) {
        this.brand = brand;
    }
    Vehicle.prototype.start = function () {
        console.log("".concat(this.brand, " is starting..."));
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(brand, doors) {
        var _this = _super.call(this, brand) || this; // Call the parent class constructor
        _this.doors = doors;
        return _this;
    }
    Car.prototype.honk = function () {
        console.log("".concat(this.brand, " is honking."));
    };
    return Car;
}(Vehicle));
var car = new Car("Toyota", 4);
car.start(); // Output: Toyota is starting...
car.honk(); // Output: Toyota is honking.
