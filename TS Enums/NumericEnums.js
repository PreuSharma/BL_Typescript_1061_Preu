"use strict";
// 1. Numeric Enums
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Up);
console.log(Direction[0]);
// Custom Values
var Status;
(function (Status) {
    Status[Status["Active"] = 1] = "Active";
    Status[Status["Inactive"] = 2] = "Inactive";
    Status[Status["Suspended"] = 3] = "Suspended";
})(Status || (Status = {}));
console.log(Status.Inactive);
// Heterogeneous Numeric Enums
var MixedEnum;
(function (MixedEnum) {
    MixedEnum[MixedEnum["Number"] = 1] = "Number";
    MixedEnum["String"] = "Text";
})(MixedEnum || (MixedEnum = {}));
console.log(MixedEnum.String);
