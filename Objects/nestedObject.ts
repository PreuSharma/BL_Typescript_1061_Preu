
//  Nested Object Types
let employee2: { 
    name: string; 
    address: { 
        city: string; 
        postalCode: number; 
    }; 
};

employee2 = {
    name: "John",
    address: {
        city: "New York",
        postalCode: 10001
    }
};

console.log(employee2.address.city); 
