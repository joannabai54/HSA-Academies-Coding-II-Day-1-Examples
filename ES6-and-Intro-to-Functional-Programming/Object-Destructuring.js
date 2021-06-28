/* The process of destructuring an object involves defining an object
Then you can destructure by defining an object variable 
  const {the object keys here, separated by commas} set equal to the object
Then you can call on the keys directly as they are defined now.
*/

const student = {
  name: "Bliss",
  house: "Kirkland",
}

const { name, house } = student

// Note the syntax difference here! Also note the use of template-literals! 
console.log(`${name} is in ${house}`)
console.log(student.name + " is in " + student.house)

