"use strict";
// Reverse Mapping
var Colors;
(function (Colors) {
    Colors[Colors["Red1"] = 1] = "Red1";
    Colors[Colors["Green1"] = 2] = "Green1";
    Colors[Colors["Blue1"] = 3] = "Blue1";
})(Colors || (Colors = {}));
console.log(Colors.Red1);
console.log(Colors[1]);
console.log(Colors["Green1"]);
// Type Safety
var Status;
(function (Status) {
    Status[Status["Active1"] = 0] = "Active1";
    Status[Status["Inactive2"] = 1] = "Inactive2";
})(Status || (Status = {}));
function updateStatus(status) {
    console.log(status);
}
updateStatus(Status.Active);
updateStatus(3);
//Enum Utilities
(function (Status) {
    Status["Active3"] = "ACTIVE";
    Status["Inactive3"] = "INACTIVE";
})(Status || (Status = {}));
console.log(Object.keys(Status));
const move = Direction.Up;
console.log(move); // Compiles to: const move = 0;
