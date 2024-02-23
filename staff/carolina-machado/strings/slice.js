function slice(string, indexStart, indexEnd) {

    let newStr = "";

    if (indexStart >= 0) {

        for (let i = indexStart; i < indexEnd; i++) {

            newStr = newStr + string[i] }

        } else if (indexEnd == undefined && indexStart < 0) {

            for (let i = string.length + indexStart; i < string.length; i++) {
                newStr = newStr + string[i]
            }

            } else {

                for (let i = string.length + indexStart; i < string.length + indexEnd; i++) {

                    newStr = newStr + string[i]

                }

            }

            return newStr

        }

    

// CASE 1

//var s = 'hola mundo'

//var piece = slice(s, 5, 8)

//console.log(piece)
// 'mun'

// CASE 2

var s = 'hola mundo'

var piece = slice(s, -5, -2)

console.log(piece)
// 'ndo'