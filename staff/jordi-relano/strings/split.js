function split(string, separator) {
    var resultArray = []
    var char = ""
    for (var i = 0; i < string.length; i++) {
          if( string[i] === separator) {
            resultArray[resultArray.length] = char
              char = ""
         }else {
              char = char + string[i];   
     }
        resultArray[resultArray.length] = char
    return resultArray 
}
}

var s = "hola mundo jesus"

var words = split(s," ");
console.log(words);
