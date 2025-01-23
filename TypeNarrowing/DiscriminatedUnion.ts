// Discriminated unions ka matlab hai ki har type ke saath ek common property (discriminant) ho jo uska type define kare.
type Shape2 =
    | { kind: "circle"; radius: number }
    | { kind: "square"; sideLength: number };

function area(shape: Shape2): number {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2; // Circle ka type safe hai
    } else if (shape.kind === "square") {
        return shape.sideLength ** 2; // Square ka type safe hai
    }
    else {
        return 2;
    }
}
