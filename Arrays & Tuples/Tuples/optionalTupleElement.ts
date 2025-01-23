//You can use ? to make a tuple element optional.

let point: [number, number, number?];
point = [1, 2];      // OK
point = [1, 2, 3];   // OK
// point = [1];      // Error: Source has 1 element(s) but target requires 2.