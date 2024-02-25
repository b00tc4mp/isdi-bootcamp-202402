delete String.prototype.split

function split(string, separator) {
    var result = [];
    var element = "";
    
    for (var i = 0; i < string.length; i++) {
        if (string[i] === separator) {
            
            result[result.length] = element
            element = ''
            
        }else{ 
            element = element + string[i] 
        }
    }        
    
    result[result.length] = element;
    return result;
    
}

console.log('Case 1')
var s='hola mundo'
var words = split(s, " ")

console.assert(
    words[0] === 'hola' &&
    words[1] === 'mundo',
    'error'
)