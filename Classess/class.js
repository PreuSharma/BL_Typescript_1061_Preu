var Person3 = /** @class */ (function () {
    function Person3(name, age) {
        this.name = name; // Assign constructor parameters to fields
        this.age = age;
    }
    Person3.prototype.greet = function () {
        console.log("Hi, I am ".concat(this.name, ", and I am ").concat(this.age, " years old."));
    };
    return Person3;
}());
var p = new Person3("Alice", 30);
p.greet(); // Output: Hi, I am Alice, and I am 30 years old.
