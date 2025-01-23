//Tuples can also be made readonly using the readonly keyword.

let readonlyTuple: readonly [string, number] = ["Alice", 25];
// readonlyTuple[0] = "Bob"; // Error: Cannot assign to '0' because it is a read-only property