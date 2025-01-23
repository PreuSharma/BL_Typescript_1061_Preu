interface Product {
    name: string;
    price?: number; // Optional property
}

let product1: Product = { name: "Laptop" }; 
let product2: Product = { name: "Phone", price: 699 }; 

console.log(product1);
console.log(product2);
