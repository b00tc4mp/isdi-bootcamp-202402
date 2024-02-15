function indexOf(array, element, index) {
    if (index >= 0){
        for (var i = index; i < array.length; i++){
            if (array[i] === element)
                return i                
        }
        return -1
    } else if (index < 0){
        let count = 0
        for (var i = array.length + index; i < array.length; i--){
            if (array[i] === element)
                return count
            count--
        }
        return -1
    } else if (index === undefined) {
        for (var i = 0; i < array.length; i++){
            if (array[i] === element)
                return i                
        }
        return -1
    }
}



console.log(indexOf(['ant', 'bison', 'camel', 'duck', 'bison'], 'bison', 0))

