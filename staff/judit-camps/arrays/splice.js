delete Array.prototype.splice

function splice(arr, start, deleteCount, ...items) {
    var itemsLength = items.length
    var newArr = []

    // reassign start value -> always positive
    if (start < 0) {
        start = arr.length + start
    } else if (start > arr.length) {
        start = arr.length
    }

    // when delCount is undefined or > than array length - start
    // we delete from position start to finish
    if (deleteCount > arr.length - start || deleteCount == undefined) {
        for (var i = start; i < arr.length; i++) {
            newArr[newArr.length] = arr[i]
        }
        arr.length -= arr.length - deleteCount

        for (var i = 0; i < items.length; i++) {
            arr[i + start] = items[i]
        }

        // when delCount is 0 or smaller 
        // we don't delete anything but we move as many positions as itemsLength 
    } else if (deleteCount <= 0) {
        for (var i = arr.length + itemsLength - 1; i > start - 1; i--) {
            arr[i] = arr[i - itemsLength]
        }
        // we add the items from the start position
        for (var i = 0; i < itemsLength; i++) {
            arr[i + start] = items[i]
        }

        // when delCount is bigger than 0
        // we delete the necessary items
    } else {
        for (var i = start; i < start + deleteCount - 1; i++) {
            // we save the deleted items 
            newArr[newArr.length] = arr[i]


        }
        arr.length = arr.length - deleteCount

    }

    return newArr

}


console.log('CASE 1')
var months = ['Jan', 'March', 'April', 'June'];
splice(months, 1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]



console.log('CASE 2')
var a = [1, 2, 3, 4, 5, 6]
console.log(splice(a, 3))
// [ 4, 5, 6 ]
console.log(a)
// [ 1, 2, 3 ]