//Intersection types combine multiple types into one. 
// A value must satisfy all the types in the intersection. 
// Use the & (ampersand) operator to create an intersection type.

type Name2 = { name: string };
type Age2 = { age: number };

type Person2 = Name & Age; // Combines both Name and Age

const person72: Person = {
  name: "Alice",
  age: 25,
};




//Use Case in Object Types:

type Address = {
    street: string;
    city: string;
  };
  
  type Contact = {
    email: string;
    phone: string;
  };
  
  type UserProfile = Address & Contact;
  
  const user: UserProfile = {
    street: "123 Main St",
    city: "Wonderland",
    email: "alice@example.com",
    phone: "123-456-7890",
  };
  