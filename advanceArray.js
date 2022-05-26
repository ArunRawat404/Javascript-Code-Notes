const array = [1, 2, 3, 4, 5];
const doubleArray = [];

// forEach iterate through the array and do whatever is specified 
const newArray = array.forEach(num => {
    doubleArray.push(num * 2);
});

console.log('array', array); // [1, 2, 3, 4, 5]
console.log('doubleArray', doubleArray); // [2, 4, 6, 8, 10]



// Map
// map iterate through the array and it has to return some value which will be stored into new array.

const mapArray = array.map(num => num * 2 // have to return some value which will be stored in mapArray
);

console.log('mapArray', mapArray); // [2, 4, 6, 8, 10]

// const mapArray = array.map((num) => {
//     return num * 2 
// }); // can do in this way also



// filter
// filter the array by some condition and return the value which will be stored into a new array.

const filterArray = array.filter(num => num > 2 // will filter original array using condition i.e. num > 2 and will return it to filterArray
);

console.log('filterArray', filterArray) // [3, 4, 5]



// reduce
// reduce can take various parameters and perform actions on them

const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num
}, 5);

console.log('reduceArray', reduceArray); // 20 , sum of all array elements + 5(accumulator)


const average = array.reduce((total, num, index, array) => {
    total += num
    return total/array.length
}, 0);

console.log('average', average); // 1.18752
