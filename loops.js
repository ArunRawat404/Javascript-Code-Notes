const fruits = ["grape", "mango", "orange", "apple"];

// iterating - arrays , strings

// forEach
fruits.forEach(item => {
    console.log(item);
})


// for of

for (item of fruits) {
    console.log(item)
}


// for in 
// enumerating - object

const basket = {
    grape: 10,
    mango: 12,
    orange: 13,
}

// for in is used to enumerate an object
for (item in basket) {
    console.log(item) // grapes mango orange 
}