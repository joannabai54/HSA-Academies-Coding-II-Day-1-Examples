// You are not able to reference an object in its definition,
// so as opposed to test.prop defined in the function, you must use this.prop

const test = {
  prop: 42,
  func: function() {
    return this.prop
  },
}

console.log(test.func())

// Another example of an object being defined using this
const students = {
  first: "Joanna",
  age: 20,
  func: function() {
    return this.age 
  }
}

students.func()

// This example has the function take in a parameter of fav_color 
// & implements template literals as well

const students2 = {
  first: "Joanna",
  age: 20,
  func: function(fav_color) {
    console.log(`${this.first} likes ${fav_color}`)
  }
}

students2.func("white")