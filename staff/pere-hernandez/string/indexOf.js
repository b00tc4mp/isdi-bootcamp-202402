delete String.prototype.indexOf


function indexOf(string, searchString) {
    
    let comparativeStr = ''
    for (let i = 0; i < string.length; i++){
                
        if (string[i] === searchString[0]){
            
            comparativeStr = string[i]
            for (let j = 1; j < searchString.length; j++){
                comparativeStr = comparativeStr + string[i+j]
            }
            if (comparativeStr === searchString)
                return 1
        }
    }
    return -1
}

// CASE 1

var s = 'hola mundo'

var index = indexOf(s, 'ola')

console.log(index)
// 1

// CASE 2

var s = 'hola mundo'

var index = indexOf(s, 'olaf')

console.log(index)
// -1