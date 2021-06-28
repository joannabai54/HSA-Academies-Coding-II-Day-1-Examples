/* Array names using filter, which requires a first-order function to be plugged in
that has some conditional which will be applied to each element within the array.
startsWith is a unique function to strings in Javascript
*/
const names = ["Bliss", "Jude", "Jada", "Diego"]

const startsWithJ = names.filter(name => name.startsWith("J"))

console.log(startsWithJ)

/* Array numbers using filter with a different type of conditional than we have up above.
*/
const numbers = [42, 57, 1, 4, 92, 340, 238, 4]

const lessThan100 = numbers.filter(numbers => numbers < 100)

console.log(lessThan100)
