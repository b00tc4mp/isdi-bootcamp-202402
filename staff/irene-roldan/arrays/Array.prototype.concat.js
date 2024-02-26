delete Array.prototype.concat

function concat (arrays){
    var result=[]
    
    for (var i = 0; i < arrays.length; i++) {
        for (let j = 0; j < arrays[i].length; j++) {
            result[result.length]=arrays[i][j]
        }
    }
    return result
}

/*

function concat (array, array2){

    if(arguments.length < 3){
    
    
        var newArray = []
    
       for(var i = 0; i < array.length; i++){
            var element = array[i]
            newArray[i] = element
        }
    
        for(var i = 0; i < array.length; i++){
            var element = array2[i]
            newArray[newArray.length] = element
        }
        return newArray

    }else {
    
        var newArray = []

        for (var i = 0; i < arguments.length; i++){

            var array = arguments[i]
            for(var j = 0; j < array.length; i++){
                var element = array[j]

                newArray[newArray.length] = element
                
            }

        }
        return newArray
    }
        
}

/*

function concat (){
    var newArray=[]
    
    for (var i = 0; i < arguments.length; i++) {
        
        var argument = arguments[i]

        if(argument instanceof Array){
        
            for (let j = 0; j < argument.length; j++) {
                element = argument[j]
    
                newArray[newArray.length] = element
            }
        else{
            newArray[newArray.length] = argument
        }
    }
    return newArray
}

*/




console.log('Case 1')

var a = ["a", "b", "c"];
var b = [1, 2, 3]

var char = concat([a, b])
console.assert(char[0] === 'a' && char[1] === 'b' && char[2] === 'c' && char[3] === 1 && char[4] === 2 && char[5] === 3, 'a, b, c, 1, 2, 3')


console.log ('Case 2')

var a = ["a", "b", "c"];
var b = [1, 2, 3];
var c = ["hola", "Mundo"]

var char = concat([a, b, c])
console.assert(char[0] === 'a' && char[1] === 'b' && char[2] === 'c' && char[3] === 1 && char[4] === 2 && char[5] === 3, 'a, b, c, 1, 2, 3')
