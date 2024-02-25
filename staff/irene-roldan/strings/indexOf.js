delete String.prototype.indexOf

function indexOf(string, searchString) {

    var searchStringIndex = 0;
    var numOks = 0;
    
    for (var i = 0; i < string.length; i++) {

        if (string[i] === searchString[searchStringIndex]) {
            numOks++
            searchStringIndex++
        }else {
            numOks = 0
            searchStringIndex = 0
            
            if (string[i] === searchString[searchStringIndex]) {
            numOks++
            searchStringIndex++
            }
        }
        
        if (numOks === searchString.length) {
            return i - searchString.length + 1 
        }
        
    }
    return -1;
}


console.log('Case 1')
var s = 'hola mundo'
var index = indexOf(s, 'ola')

console.assert(index === 1, 'index should be -1')

console.log('Case 2')
var s = 'hola mundo'
var index = indexOf(s, 'olaf')

console.assert(index === -1, 'index should be -1')

