// Type guards ka use karte hain variable ke type ko check karne ke liye runtime pe. 
// Iska fayda yeh hai ki aap confidently us variable ke specific properties ko access kar sakte ho.

function printValue(value: string | number) {
    if (typeof value === "string") {
        console.log("String value:", value.toUpperCase());
    } else {
        console.log("Number value:", value.toFixed(2));
    }
}

printValue("Hello"); // Output: String value: HELLO
printValue(42.5);    // Output: Number value: 42.5
