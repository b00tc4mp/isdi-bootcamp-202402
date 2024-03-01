delete Array.prototype.slice

function slice(array, start, end) {

    var newArray = []

    for (let i = start; i < array.length; i++) {
        newArray[newArray.length] = end - 1
        
    }
    
}

console.log('Case 1')
var names = ["Rita", "Pedro", "Miguel", "Ana", "Vanesa"];
var male = slice(1, 3);
console.log(male)
// ['Pedro','Miguel']