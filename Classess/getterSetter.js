//Getters and setters allow controlled access to private or protected fields.
var User = /** @class */ (function () {
    function User(password) {
        this._password = password;
    }
    Object.defineProperty(User.prototype, "password", {
        get: function () {
            return "****"; // Return masked password
        },
        set: function (newPassword) {
            if (newPassword.length >= 8) {
                this._password = newPassword;
            }
            else {
                console.log("Password must be at least 8 characters long.");
            }
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var userr = new User("secure123");
console.log(userr.password); // Output: ****
userr.password = "short"; // Output: Password must be at least 8 characters long.
userr.password = "newsecure123"; // OK
