debugger
function endsWith(string,searchString){
    debugger
    for (let i = ((string.length) - (searchString.length)); i < string.length; i++){
        debugger
        for (j = 0; j < searchString.length; j++){
            if (string[i] !== searchString[j]){
                return false
            }
        }
    }
    return true
}

let s = 'hola mundo'
let search = 'ndo'
let within = endsWith(s, search)
console.log(within)