/* Template literals are a very streamlined way to insert variable values within string statements
As opposed to having to concatenate everything with +, we can use ticks (the symbol right below the esc key)
and ${} to insert variables seamlessly
*/
console.log(`We can print a ${1} like this.`)

const a = "apple"
const num = 74
const bool = true

console.log(`My favorite food is an ${a}, my favorite number is ${num}, and it is ${bool} that I love to sing.`)
// Prints My favorite food is an apple, my favorite number is 74, and it is true that I love to sing.