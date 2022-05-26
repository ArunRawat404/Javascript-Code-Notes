// Optional Chaining Operator ?.
// It works same as if else statement but in a simpler and clean code way

const garryPokemon = {
    charmandar: {
        species: "dragon",
        weight: 30,
        height: 90,
        power: 0
    }
};

const charmandarWeight = garryPokemon?.charmandar?.weight;
console.log(charmandarWeight); // 30


pikachuWeight = garryPokemon?.pikachu?.weight;
console.log(pikachuWeight) // undefined , will not give an error if key is not present so we don't need to do every time using if else statement if it exists or not


// Nullish coalescing Operator ??
// used in place of Operator || when we only want to give OR value if value is null or undefined 

const charmandarPower = garryPokemon?.charmandar?.power || "No power"; // No power , because it checks if statement is true or false , 0 is false in js
console.log(charmandarPower);

const charmandarPower2 = garryPokemon?.charmandar?.power ?? "No power"; // 0 , because it if value is null or undefined
console.log(charmandarPower2);