function endsWith(string, searchString) {
    var searchStringIndex = 0;
    var numOks = 0;
    for (var i = (string.length - searchString.length); i < string.length; i++) {

        if (string[i] === searchString[searchStringIndex]) {
            numOks++;
        }
        searchStringIndex++;
    }
    if(numOks === searchString.length){
        return true;
    }else{
        return false;
    }
}

var s = 'hola mundo';
var result = endsWith(s, 'dos');
//var result = endsWith(s, 'ndo');

console.log(result)