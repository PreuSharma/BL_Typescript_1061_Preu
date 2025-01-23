interface Vehicle5 {
    make: string;
    model: string;
}

interface Car2 extends Vehicle5 {
    numberOfDoors: number;
}

let myCar90: Car2 = {
    make: "Toyota",
    model: "Corolla",
    numberOfDoors: 4
};
