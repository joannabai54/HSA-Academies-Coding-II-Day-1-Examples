// Example of creating an example object using key-value pairs & referencing different data from it

const student = {
  firstName: "Ada",
  lastName: "Lovelace",
  notes: "Literally created programming",
}

console.log(student)
console.log(student.firstName)
console.log(Object.keys(student)) // Returns the array of keys in the object
console.log(Object.values(student)) // Returns the array of values in the object