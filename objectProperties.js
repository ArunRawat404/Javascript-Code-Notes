// Object properties , new way to declare properties to objects

const characterName = "Luffy";

const obj1 = {
    [characterName]: "One piece",
    [1 + 2] : "Web3",
}


const a = "Hi";
const b = "Bye";

// object shorthand, If properties name is same as values then can directly use this method
const obj3 = {
    a, 
    b
}