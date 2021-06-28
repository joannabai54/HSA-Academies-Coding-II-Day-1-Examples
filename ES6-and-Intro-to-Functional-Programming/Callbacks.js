/* alerts aren't going to work in VSCode, so unfortunately we are unable to run this code.
The basic idea is that callback() is a first-order function that can get passed into 
a higher-level function (in this case, doHomework) and perform some event right after 
another.
*/

function doHomework(subject, callback) {
    alert(`Starting my ${subject} homework.`)
    callback()
}

function alertFinished() {
    alert("Finished my homework")
}

doHomework("english", alertFinished)


