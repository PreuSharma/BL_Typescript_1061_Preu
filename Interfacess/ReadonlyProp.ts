interface User {
    readonly id: number;
    name: string;
}

let user12: User = { id: 1, name: "John" };
user12.name = "Doe"; 
// user12.id = 2;       // Error: Cannot assign to 'id' because it is a read-only property
