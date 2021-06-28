/* setTimeout is an example of an asynchronous function
time is also given in milliseconds, so 2000 milliseconds would be 2 seconds
This example utilizes promises that must be intiated with the "new Promise" keyword
Promises also use ".then" to append & chain other promises onto the call
*/

function delay(t) {
    return new Promise(function(resolve){
        return setTimeout(resolve, t)
    })
}

function logHi() {
    console.log("hi")
}

delay(2000).then(logHi)


