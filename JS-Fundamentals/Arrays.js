const students = ["Annie", "Diego", "Bliss", "Jada"]

// should print the whole array
console.log(students)

// will print the element at index 2 — remember that arrays are zero-indexed
// zero indexing means that the first element is at index 0 (written as [0])
console.log(students[2])

// push method appends the input (in this case "You") to the end of the array
students.push("You")
console.log(students)

// pop method removes the last element from the array
students.pop()
console.log(students)