function indexOf(string, searchString) {
    debugger
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



var s = 'hola mundo';

//var index = indexOf(s, 'ola');
var index = indexOf(s, 'olaf');

console.log(index)

