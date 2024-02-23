function slice(string, indexStart, indexEnd) {

    let newStr = "";


    for (let i = indexStart; i < indexEnd; i++) {

        for (let j = string.length + indexStart; j < string.length; j++) {

            for (let h = string.length + indexStart; h < string.length + indexEnd; h++) {

                if (indexStart >= 0) {
                    newStr = newStr + string[i]
                } else if (indexEnd == undefined) {
                    newStr = newStr + string[j]
                } else {
                    newStr = newStr + string[h]
                }

                return newStr

            }
            
        }
        
    }

}


var s = 'hola mundo'

var piece = slice(s, -3)

console.log(piece)
// 'ndo'