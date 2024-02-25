delete String.prototype.slice

function slice(string, indexStart, indexEnd) {
    var element = "";
    
    for (var i = 0; i <string.length; i++) {

        if (indexEnd === undefined) {
            indexEnd = string.length;
        }
        
        if (indexStart < 0) {
            indexStart = string.length - (indexStart * -1);
        }
        
        if (indexStart <= i && indexEnd > i){
            element = element + string[i];
        }

    }
    return element
}

console.log('Case 1')
var s = 'hola mundo'
var piece = slice(s, -3)
console.assert(piece === 'ndo', 'ndo')


console.log('Case 2')
var piece = slice(s, 5, 8)

console.assert(piece === 'mun','mun')