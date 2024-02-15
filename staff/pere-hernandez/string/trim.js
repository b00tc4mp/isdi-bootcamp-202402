delete String.prototype.trim

function trim(string) {
    
    debugger

    let newStr = ''
    let backwardsStr = ''
    let begins = false
    let ends = false
    
    for (let i = string.length - 1; i >= 0; i--){
        if (string[i] === ' ' || string[i] === '\n' || string[i] === '\s' || string[i] === '\r') {    
            if (begins === true){
                backwardsStr = backwardsStr + string[i]
            }
        } else {
            begins = true
            backwardsStr = backwardsStr + string[i]
        }
    }

    for (let i = backwardsStr.length - 1; i >= 0; i--){
        if (backwardsStr[i] === ' ' || backwardsStr[i] === '\n' || backwardsStr[i] === '\s' || backwardsStr[i] === '\r'){
            if (ends === true){
                newStr = newStr + backwardsStr[i]
            }
        } else {
            ends = true
            newStr = newStr + backwardsStr[i]
        }
    }
    return newStr
}

// CASE 1

var s = '  hola mundo   '

var result = trim(s)

console.log(result)
// 'hola mundo'

// CASE 2

var s = ' \n\s\r hola mundo \n\s\r '

var result = trim(s)

console.log(result)
// 'hola mundo'