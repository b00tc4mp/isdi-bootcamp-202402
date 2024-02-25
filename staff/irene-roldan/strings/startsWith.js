delete String.prototype.startsWith

function startsWith(string, searchString) {
    
    for (let i = 0; i < searchString.length; i++) {

        if (string[i] === searchString[i]) {
            
        }else{
            return false
        }
    }
    return true
    
}


console.log('Case 1')
var s = 'hola mundo'
var result = startsWith(s, 'hol')
console.assert(result === true, 'true')

console.log('Case 2')
var s = 'hola mundo'
var result = startsWith(s, 'holo')

console.assert(result === false, 'false')