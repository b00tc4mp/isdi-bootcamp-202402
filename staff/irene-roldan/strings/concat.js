delete String.prototype.concat()

function concat (element1, element2, separator){
    //crear una variable auxiliar 'result' que sume valores de element + separator
    var result = element1 + separator + element2
    //función que devuelva variable auxiliar 'result'
    return result
    
}

var str1 = 'Hello';
var str2 = 'World';

var char = concat(str1, str2, " ")

console.log(char)
//"Hello World"