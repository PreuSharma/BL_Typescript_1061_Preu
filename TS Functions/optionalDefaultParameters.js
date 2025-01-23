// Optional and Default Parameters :
//--Optional Parameters
//Use ? after the parameter name to make it optional.
//If the optional parameter is not passed, it is treated as undefined.
//--Default Parameters
//Assign a default value to a parameter. If no value is provided during the call, the default is used.
function abcy(a, b) {
    if (b === void 0) { b = 2; }
    return a * b;
}
console.log(abcy(10));
