function reverse(string) {

    let newStr = ''
    for (let i = string.length - 1; i >= 0; i--) {
        newStr = newStr + string[i]
    }
    return newStr
}
    


// CASE 1

var s = 'carol'

var result = reverse(s)

console.log(result)