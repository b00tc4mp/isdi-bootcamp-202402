function split(string, separator) {
    var result = [];
    var element = "";
    
    for (var i = 0; i < string.length; i++) {
        debugger
        if (string[i] === separator) {
            
            result[result.length] = element
            
        }else{ 
            element = element + string[i] 
        }
    }        
    
    result[result.length] = element;
    return result;
    
}

var s="hola mundo";

var words = split(s, " ");

console.log(words)