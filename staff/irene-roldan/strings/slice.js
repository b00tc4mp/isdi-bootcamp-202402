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

var s = 'hola mundo';

//var piece = slice(s, 5, 8);
var piece = slice(s, -3);

console.log(piece);