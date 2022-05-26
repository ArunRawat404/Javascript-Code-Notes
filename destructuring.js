// Destructuring , it is a way to destructure the complex things like array and object

// using destructuring on array and naming the elements so that we can access them easily
const [fname, lname] = ["Arun", "Rawat"];

console.log(fname) // Arun

const obj = {
    name = "Arun",
    experience = 100,
    isValid = false,
}

// to grab the properties of object traditionally we do this 
const name = obj.name;
const experience = obj.experience;
let isValid = obj.isValid;

// But with Destructuring concept we can use  

const { name, experience } = obj;
let { isValid } = obj;
