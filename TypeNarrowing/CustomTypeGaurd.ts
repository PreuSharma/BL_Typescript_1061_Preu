// Kabhi kabhi aapko khud ka custom logic likhna padta hai type ko narrow karne ke liye. Iske liye variable is Type ka use karte hain.

type Bird = { fly: () => void };
type Fish = { swim: () => void };

function isBird(animal: Bird | Fish): animal is Bird {
    return (animal as Bird).fly !== undefined;
}

function move2(animal: Bird | Fish) {
    if (isBird(animal)) {
        animal.fly(); // Ab TypeScript ko pata hai ki yeh Bird hai
    } else {
        animal.swim(); // Yahaan yeh Fish hai
    }
}
