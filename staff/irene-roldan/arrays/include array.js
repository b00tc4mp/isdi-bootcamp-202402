delete Array.prototype.includes();

/*

function includes(array, value, fromIndex){

    if(arguments.length < 3){

     for(var i = 0; i < array.lenth; i++){
        var element = array[i]

        if(element === value)
            return true
        
    }
    return false
    }ese{
       if (from)
        for(var i = 0; i < array.lenth; i++){
    
        }
   
}

*/



function includes(array, value, fromIndex) {

    if (arguments.length < 3) {
    
        for (let i = 0; i < array.length; i++) {
            
            if (array[i] === value) 
            return true
        
    }
        return false
    
    }else {

        if (fromIndex > -1) { // fromIndex >= 0
            for (let i = fromIndex; i < array.length; i++) {

                if (element === value) {
                    return true 
                }
            }
            return false 
        }else{
           for (let i = array.length + fromIndex; i < array.length; i++){
               if (element === value) {
                   return true
                   
               }
               return false
           } 
        }
    }
    
    
}




console.log('Case 1')

var nums = [1, 2, 3]
var char = includes(nums, 2)
console.log(char)
//true




console.log('Case 2')

var nums = [1, 2, 3]
var char = includes(nums, 4)
console.log(char)
//false



console.log('Case 3')

var nums = [1, 2, 3]
var char = includes(nums, 3, 3)
console.log(char)
//false



console.log('Case 4')
var nums = [1, 2, 3]
var char = includes(nums, 3, -1)
console.log(char)
//true

console.log('Case 5')

var nums = [1, 2, NaN]
var char = includes(nums, NaN)
console.log(char)
//true



