delete String.prototype.lastIndexOf

function lastIndexOf(string, searchString) {
    
    let index
    for (let i = 0; i < string.length; i++){
        if (string[i] === searchString[0]){
            let newString = string[i]
            for (let j = 1; j < searchString.length;j++){
                newString = newString + string[i+j]
            }
            if (newString === searchString)
                index = i
        }
    }
    return index
}

// CASE 1

var s = 'hola mundo'

var index = lastIndexOf(s, 'o')

console.log(index)
// 9

// CASE 2

var s = 'hola mundo'

var index = lastIndexOf(s, 'ol')

console.log(index)
// 1