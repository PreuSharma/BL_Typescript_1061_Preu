/*

It's how we handle runtime errors gracefully without crashing the program.
In TypeScript, we use try, catch, and finally blocks.

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
try {
    // Code that might throw an error
    var num = parseInt("abc"); // This will throw an error
    console.log(num);
}
catch (error) {
    // Handle the error
    console.error("An error occurred:", error.message);
}
finally {
    // Always executes
    console.log("Done with error handling");
}
// Custom Error Classes
var ValidationError = /** @class */ (function (_super) {
    __extends(ValidationError, _super);
    function ValidationError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "ValidationError";
        return _this;
    }
    return ValidationError;
}(Error));
try {
    throw new ValidationError("Invalid input!");
}
catch (error) {
    console.error(error.name, ":", error.message);
}
