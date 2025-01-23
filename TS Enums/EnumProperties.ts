// Reverse Mapping
enum Colors {
    Red1 = 1,
    Green1,
    Blue1
}

console.log(Colors.Red1);      
console.log(Colors[1]);        
console.log(Colors["Green1"]);  

// Type Safety
enum Status {
    Active1,
    Inactive2
}

function updateStatus(status: Status): void {
    console.log(status);
}
updateStatus(Status.Active); 
updateStatus(3);  

//Enum Utilities
 enum Status {
    Active3 = "ACTIVE",
    Inactive3 = "INACTIVE"
}

console.log(Object.keys(Status));   
// console.log(Object.values(Status)); 

// Const Enum
const enum Direction2 {
    Up,
    Down,
    Left,
    Right
}

const move = Direction.Up;
console.log(move); // Compiles to: const move = 0;

