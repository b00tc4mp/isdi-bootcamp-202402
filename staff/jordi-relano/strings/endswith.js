delete String.prototype.endsWith
debugger
function endsWith(string, searchString) {
    var resultString = ""
    debugger
    for (var i = ((string.length) - (searchString.length)); i < string.length; i++) {
        resultString = resultString + string[i];
    }
    
     if (searchString === resultString) {
        debugger
        resultString = ""
        return true;
        
    } else{
         return false;
    }
}

// CASE 1

var s = 'hola mundo'

var result = endsWith(s, 'ndo')

console.log(result)
// true

// CASE 2

var s = 'hola mundo'

var result = endsWith(s, 'dos')

console.log(result)
// false