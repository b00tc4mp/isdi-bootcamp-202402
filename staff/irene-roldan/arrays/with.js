delete Array.prototype.with

function within (array, index, value) {

    var newArray = []


    if (index > -1 ) {
        for (var i = 0; i < array.length; i++){
            newArray[i] = array[i]
            
            if (i === index){
                newArray[i] = value 
            } else{
                newArray[i] = array[i]
            }
        } 
            
    }else if (index < 0){
        for (var i = 0; i < array.length-1; i++) {
            newArray[i]= array[i + 1]     
        }
        newArray[array.length -1] = value
    }
    return newArray
}


console.log('Case 1')
var arr = [1, 2, 3, 4, 5];
var result = within(arr, 2, 6); // [1, 2, 6, 4, 5]
console.log(result); // [1, 2, 3, 4, 5]

console.log('Case 2')
var arr = [1, , 3, 4, , 6]; 
var result = within(arr, 0, 2); 
console.log(result)// [2, undefined, 3, 4, undefined, 6]

console.log('Case 3')
var arrayLike = {
    length: 3,
    unrelated: "foo",
    0: 5,
    2: 4,
    3: 3, // ignored by with() since length is 3
};
var result = within(arrayLike, 0, 1)
console.log(result);
// [ 1, undefined, 4 ]



