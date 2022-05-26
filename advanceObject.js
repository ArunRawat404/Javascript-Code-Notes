// reference type , Array, Function, and Object
// Variables that are assigned a non-primitive value are given a reference to that value. That reference points to the object’s location in memory. The variables don’t actually contain the value.

let object1 = { value: 10 };
let object2 = object1; // we are coping the reference of the object1 so both are pointing to same memory location
let object3 = { value: 10 };

console.log(object1 === object2); // true , both are pointing to same memory location
console.log(object1 === object3); // false , both are having same value but reference is different



// context
// It tells us where we are within the object using this function

console.log(this) // Window , we are inside window object which is root object

function a() {
    console.log(this)
}

a(); // window

const obj = {
    b: function () {
        console.log(this); // 
    }
}

console.log(obj.b()) // {b: ƒ}