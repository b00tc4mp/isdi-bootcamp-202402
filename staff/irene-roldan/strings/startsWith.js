String.prototype.startsWith;

function startsWith(string, searchString) {
    
    for (let i = 0; i < searchString.length; i++) {

        if (string[i] === searchString[i]) {
            
        }else{
            return false
        }
    }
    return true;
    
}




var s = 'hola mundo';

var result = startsWith(s, 'hol');
//var result = startsWith(s, 'holo');

console.log(result);