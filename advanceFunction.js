// CLosures 
// a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.


const first = () => {
    const greet = "hi";
    const second = () => {
        alert(greet);  // second function can access first function variables , closure allow child scope to access parent scope but parent cannot access child scope 
    }
    return second;
}

const newFunction = first();
newFunction();



// Currying 
// It is a process of converting a function which takes multiple arguments into a function that takes them one at a time.

const a = prompt("Which number table you want to print: ");

for (let i = 1; i <= 10; i++) {
    const multiply = (a, i) => a * i; // A function that takes multiple arguments
    const curriedMultiply = (a) => (i) => a * i; // function which take multiple arguments is converted into function which take one argument at a time.
    console.log(curriedMultiply(a)(i));
}


// Compose
// It is an act of putting 2 or more function together to form another function where output of one function is input of the other function.

const composeFunction = (f, g) => (a) => f(g(a));
const addOne = (num) => num + 1;
const multiplyTwo = (num) => num * 2;
console.log(composeFunction(addOne, multiplyTwo)(5)) // 11 , addOne(multiplyTwo(5)) = addOne(5 * 2) = addOne(10) = 11  
// number 5 will be given to function multiplyTwo as an input and this function output will be given to function addOne as input


// Compose with more than 2 function
const composeFunction = (f, g, h) => (a) => f(g(h(a)));
const addOne = (num) => num + 1;
const multiplyTwo = (num) => num * 2;
console.log(composeFunction(addOne, multiplyTwo, multiplyTwo)(5)) // 11 , addOne(multiplyTwo(multiplyTwo(5))) = addOne(multiplyTwo(5 * 2)) = addOne(multiplyTwo(10)) = addOne(20) = 21
// number 5 will be given to function multiplyTwo as an input and this function output will be given to function multiplyTwo and then this function output will be given to function addOne as input