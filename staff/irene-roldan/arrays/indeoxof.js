delete Array.prototype.indexOf

function indexOf(array, searchIndex, fromIndex) {

    if (fromIndex > 0 && fromIndex < array.length) {

        for (let i = fromIndex; i < array.length; i++) {
        
                if (array[i] === searchIndex) {
                    return i
                }else{
                    return -1 
                }
            }        
            
        
    }else if (fromIndex === undefined) {
        fromIndex = 0

        for (let i = fromIndex; i < array.length; i++) {
        
                if (array[i] === searchIndex) {
                    return i
                }else{
                    return -1 
                }
            }        
        
    }else if(fromIndex < 0){
        for (let i = array.length + fromIndex; i < array.length - 1; i--) {
            if (array[i] === searchIndex) {
                    return i
                }else{
                    return -1 
                }
        }
    }
    return -1
}


console.log('CASE 1')
var arr = [2, 9, 9];
var char = indexOf(arr, 2)
console.log(char)
//0


console.log('CASE 2')

var arr = [2, 9, 9];
var char = indexOf(arr, 7)
console.log(char)
//-1 



console.log('CASE 3')

var arr = [2, 9, 9];
var char = indexOf(arr, 9, 2)
console.log(char)
//2


console.log('CASE 4')

var arr = [2, 9, 9];
var char = indexOf(arr, 2, -1)
console.log(char)
//-1


console.log('CASE 5')

var arr = [2, 9, 9];
var char = indexOf(arr, 2, -3)
console.log(char)
//0



