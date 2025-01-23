//3. Rest Parameters
//Rest parameters allow you to pass multiple arguments as an array using ....
//Use it when you don’t know the exact number of arguments.
function sum() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    return arr.reduce(function (total, num) {
        return total + num;
    }, 0);
}
console.log(sum(1, 2, 3, 4, 5, 6));
