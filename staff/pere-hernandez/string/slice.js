
function slice(string, indexStart, indexEnd){
    var newStr = ''
    
    if (indexStart >= 0){
        
        for (var i = indexStart; i < indexEnd; i++){
        newStr = newStr + string[i]
        }

    } else if (indexEnd === undefined){
        
        for (var i = string.length + indexStart; i < string.length; i++){
        newStr = newStr + string[i] 
        }
    } else {
        
        for (var i = string.length + indexStart; i < (string.length) + indexEnd; i++){
        newStr = newStr + string[i] 
        }
    }
    return newStr
}

// CASE 1

var s = 'hola mundo'

var piece = slice(s, 5, 8)

console.log(piece)
// 'mun'

// CASE 2

var s = 'hola mundo'

var piece = slice(s, -3)

console.log(piece)
// 'ndo'