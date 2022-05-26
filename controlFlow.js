// Switch Statement

let whatHappened;

function moveCommand(direction) {
    switch (direction) {
        case "forward":
            whatHappened = "Move forward and found a treasure!";
            break;
        case "backward":
            whatHappened = "Move backward and found a dead end!";
            break;
        case "right":
            whatHappened = "Move forward and found a way to get home!";
            break;
        case "left":
            whatHappened = "Move left and found a river!";
            break;
        default:
            whatHappened = "Enter a valid direction!";
            break;
    }   return whatHappened;
}

console.log("forward"); // Move forward and found a treasure!



// Ternary operator
// condition ? if true do this ? else do this

function isValid(bool){
    return bool;
}

var ans = isValid(true) ? "User is valid" : "User is not valid"

//  Simplified version of a single if-else statement to return something