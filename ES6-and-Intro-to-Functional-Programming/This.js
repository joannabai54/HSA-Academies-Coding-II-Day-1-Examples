const test = {
  prop: 42,
  func: function() {
    return this.prop
  },
}

console.log(test.func())

// const students = {
//   first: "Joanna",
//   age: 20,
//   func: function() {
//     return this.age 
//   }
// }

const students = {
  first: "Joanna",
  age: 20,
  func: function(fav_color) {
    console.log(`${this.first} likes ${fav_color}`)
  }
}

students.func("white")