

function split(string, separator) {
    
    let Arr = []
    let indexArr = 0
    let str = ''
    for (let i = 0; i < string.length; i++){        
        if (string[i] !== separator){
            
            str = str + string[i]
        } else {
            Arr[indexArr] = str
            indexArr++
            str = ''
        }
    }
    Arr[indexArr] = str
    return Arr
}
// CASE 1

var s = 'hola mundo'

var words = split(s, ' ')

console.log(words)
// ['hola', 'mundo']