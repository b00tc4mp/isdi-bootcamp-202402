delete Array.prototype.join

function join(array, separator) {
    var resultString = ""
    if (separator === "") {
        for (var i = 0; i < array.length - 1; i++) {
            debugger
            separator = ","
            let string = array[i] + separator;
            resultString = resultString + string
        }
    } else if (separator === undefined) {
        for (var i = 0; i < array.length - 1; i++) {
            debugger
            separator = ""
            let string = array[i] + separator;
            resultString = resultString + string

        }
    }
    else {
        for (var i = 0; i < array.length - 1; i++) {
            debugger
            let string = array[i] + separator;
            resultString = resultString + string



        }

    }
    var lastElementArray = array.length - 1
    var lastString = array[lastElementArray]
    return resultString = resultString + lastString
}

console.log("CASE 1");

const animals = ["Dodo", "Tiger", "Penguin", "Frodo"];
let separator = "-"
let result = join(animals, separator)
console.log(result)

//expected output "Dodo,Tiger,Penguin,Frodo"



console.log("CASE 2");

const animals1 = ["Dodo", "Tiger", "Penguin", "Frodo"];
let separator1 = ""
let result1 = join(animals1, separator1)
console.log(result1)

//expected output "Dodo,Tiger,Penguin,Frodo"

console.log("CASE 3");

const animals2 = ["Dodo", "Tiger", "Penguin", "Frodo"];
let separator2;
let result2 = join(animals2, separator2)
console.log(result2)

//expected output "Dodo,Tiger,Penguin,Frodo"