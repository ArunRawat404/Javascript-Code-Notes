// let , it's used to define a variable and it create a new scope every time it's closed inside {} brackets / block.

let isValid = false;
let experienced = 100;

if(experienced > 90) {
    let isValid = true; // let create a new local scope here so it will not affect the global scope or root scope. 
    console.log("inside ", isValid); // inside true
}

console.log("outside ", isValid); // outside false

// const is used to define a constant variable which can be used for constant variables, function name, const don't allow reassign the value gives an error.
const myName = "Arun";
// const name = "Andrew" // Will give error as reassign is not allowed

// const can be helpful for naming a function
const a = function(){ 
    console.log(myName);
}

a();

// Cannot reassign obj but can change the properties of object.
const obj = {
    myName = "Arun",
    experience = 100,
}





