// Falsey-Truthy Values

if (true) {
  console.log("true: This should print!")
}

if (false) {
  console.log("false: This should not print!")
}

// Syntax note: ! means not, so !null means NOT null
if (!null) {
  console.log("!null: This should print!")
}

// This means not (not 42), so essentially just 42
if (!!42) {
  console.log("!!42: This should print!")
}

if (!undefined) {
  console.log("!undefined: This should print!")
}

if (!0) {
  console.log("!0: This should print!")
}

// Remember '' and "" are the same and an empty string is a falsey value
if (!'') {
  console.log("!'' This should print!")
}

// NaN means Not a Number
if (!NaN) {
  console.log("!NaN: This should print!")
}

if (!!'HSA') {
  console.log("!!'HSA': This should print!")
}

// Empty objects are truthy values
if (!!{}) {
  console.log("!!{}: This should print!")
}

// Empty arrays are truthy values
if (!![]) {
  console.log("!![]: This should print!")
}
