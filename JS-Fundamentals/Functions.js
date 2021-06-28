// remember console.log is Javascript's print method!

// function declaration
function sayHello(name) {
    console.log("Hello, " + name + "!")
}

const greeting = sayHello("Joanna") 

// function expression
const sayHello2 = function (name) {
    console.log("Hello, " + name + "!")
}
sayHello2("Joanna")

// arrow function
// area of a square
const sq_area = (width, height) => width * height 

const sayHello3 = name => {
    console.log("Hello, " + name + "!")
}

// method of one lining arrow function notation
    // can only be used if there is one command being given in the function
// const sayHello3 = name => console.log("Hello, " + name + "!")

sayHello3("Joanna")

// area of a triangle
const tri_area = (base, height) => console.log(base * height * 0.5)
