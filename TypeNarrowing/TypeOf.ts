function checkType(value: string | number | boolean): void {
    if (typeof value === "string") {
        console.log("This is a string:", value);
    } else if (typeof value === "number") {
        console.log("This is a number:", value);
    } else if (typeof value === "boolean") {
        console.log("This is a boolean:", value);
    }
}

checkType("TypeScript");
checkType(42);
checkType(true);
