//  Readonly Properties
let user1: { readonly id: number; name: string };

user1 = { id: 1, name: "Alice" };

user1.name = "Bob"; 
// user1.id = 2;
console.log(user1.id);
       