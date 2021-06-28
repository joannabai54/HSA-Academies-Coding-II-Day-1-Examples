// Rest 
const array = [1, 2, 3, 4, 5]

const [a, b, ...rest] = array

console.log(a * b)

console.log(rest) // Return an array
console.log(...rest) // Adding ... returns separate values

// Spread

// Function declaration notation
function sum(x, y, z) {
    return x + y + z
}

// Arrow Notation
const sum = (x, y, z) => x + y + z

// Sum expects three separate inputs (x, y, z)
// Using the ... makes it so the numbers array is a valid input into sum
// because it breaks the array into separate values
const numbers = [1, 2, 3]
console.log(sum(...numbers))