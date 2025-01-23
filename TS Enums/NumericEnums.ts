// 1. Numeric Enums
enum Direction {
    Up,    
    Down,  
    Left,  
    Right  
}
console.log(Direction.Up);   
console.log(Direction[0]);


// Custom Values
enum Status {
    Active = 1,
    Inactive,    
    Suspended  
}
console.log(Status.Inactive);


// Heterogeneous Numeric Enums
enum MixedEnum {
    Number = 1,
    String = "Text"
}
console.log(MixedEnum.String);






