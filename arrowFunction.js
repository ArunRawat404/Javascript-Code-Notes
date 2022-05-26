// A new way and simplified way to write a function 

// Simple way to write a function
function sum(a, b){
    return a + b;
}

// Arrow function
const add = (a, b) => a + b;

// Can do this also
const add = (a, b) => {
    return a + b
};

sum(2, 4); //6
add(2, 4) //6