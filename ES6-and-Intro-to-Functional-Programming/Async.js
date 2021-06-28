/* Await and Async are the new version of Promises essentially.
Without having to promise chain (the super messy, busy chunk of code we saw in class),
async and await allow for multiple functions to run at one time, instead of 
line by line, in order.
*/

function doubleAfter2Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x * 2), 2000
        })
    })
}

async function addAsync() {
    const a = await doubleAfter2Seconds(10)
    const b = await doubleAfter2Seconds(20)
    const c = await doubleAfter2Seconds(30)
    return a + b + c
}

/* the await keyword will make sure the promise returns a value 
before allowing the next line of code to run. Asynchronous functions
can run at the same time, but using await essentially makes the functions synchronous again,
which is the Javascript default. We used await keyword here as an example, but it technically would
perform the same way if we removed the async and await keywords. 
*/

function addAsync() {
    const a = doubleAfter2Seconds(10)
    const b = doubleAfter2Seconds(20)
    const c = doubleAfter2Seconds(30)
    return a + b + c
}


