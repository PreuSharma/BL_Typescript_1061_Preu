// Constant memebers
enum Numbers {
    Zero,       
    One = 1,    
    Two         
}
console.log(Numbers.Zero);

// Computed Members
enum Colors {
    Red = 1,
    Green = Red + 2,   // 3
    Blue = Math.pow(2, 3) // 8
}
console.log(Colors.Green);