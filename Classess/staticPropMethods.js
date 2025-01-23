//Static members belong to the class rather than any instance.
//  They are accessed using the class name.
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.add = function (a, b) {
        return a + b;
    };
    Calculator.pi = 3.14159;
    return Calculator;
}());
console.log(Calculator.pi); // Output: 3.14159
console.log(Calculator.add(5, 10)); // Output: 15
