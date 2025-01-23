"use strict";
// Constant memebers
var Numbers;
(function (Numbers) {
    Numbers[Numbers["Zero"] = 0] = "Zero";
    Numbers[Numbers["One"] = 1] = "One";
    Numbers[Numbers["Two"] = 2] = "Two";
})(Numbers || (Numbers = {}));
console.log(Numbers.Zero);
// Computed Members
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 1] = "Red";
    Colors[Colors["Green"] = 3] = "Green";
    Colors[Colors["Blue"] = Math.pow(2, 3)] = "Blue"; // 8
})(Colors || (Colors = {}));
console.log(Colors.Green);
