function Arroz() {
    if (arguments.length !== 1) {
        this.length = arguments.length

        for (var i = 0; i < arguments.length; i++) {
            var argument = arguments[i]

            this[i] = argument
        }
    } else {
        var argument = arguments[0]

        if (typeof argument === 'number') {
            this.length = argument

            return
        }

        this[0] = argument
        this.length = 1
    }
}

Arroz.prototype.push = function () {
    for (var i = 0; i < arguments.length; i++) {
        var argument = arguments[i]

        this[this.length] = argument
        this.length++
    }

    return this.length
}

Arroz.prototype.pop = function () {
    var lastIndex = this.length - 1

    var last = this[lastIndex]

    delete this[lastIndex]

    this.length--

    return last
}

Arroz.prototype.toString = function () {
    var string = 'Arroz ['

    for (var i = 0; i < this.length; i++) {
        var element = this[i]

        string += element

        if (i < this.length - 1)
            string += ', '
    }

    string += ']'

    return string
}

Arroz.prototype.at = function (index) {
    var result

    if (index > -1) {

        result = this[index]

    } else {
        result = this[this.length + index]

    }

       return result
}

Arroz.prototype.concat = function (arroz2) {
    if (arguments.length < 3) {
        var newArroz = []

        for (var i = 0; i < this.length; i++) {
            var element = this[i]

            newArroz[i] = element
        }

        for (var i = 0; i < arroz2.length; i++) {
            var element = arroz2[i]

            newArroz[newArroz.length] = element
        }

        return newArroz
    } else {
        var newArroz = []

        for (var i = 0; i < arguments.length; i++) {
            var arr2 = arguments[i]

            for (var j = 0; j < arr2.length; j++) {
                var element = arr2[j]

                newArroz[newArroz.length] = element
            }
        }

        return newArroz
    }
}

Arroz.prototype.every = function(callback) {


    for (var i = 0; i < this.length; i++) {
        var element = this[i]

        if (callback(element) !== true) {
            return false
        }
    }
    return true
}

Arroz.prototype.filter = function(callback) {

    var newArroz = []

    for (var i = 0; i < this.length; i++) {
        var element = this[i]

        if (callback(element)) {
            newArroz[newArroz.length] = element
        }

    }
    return newArroz

}

Arroz.prototype.find = function(callback) {


    for (var i = 0; i < this.length; i++) {
        var element = this[i]

        if (callback(element)) {

            return element
        } 

    } 
   
}

Arroz.prototype.forEach = function(callback) {


    for (var i = 0; i < this.length; i++) {
        var element = this[i]

        callback(element, i)

    } 
}

Arroz.prototype.from = function (callback) {

    let newArroz = []

    if (callback === undefined){
        for (var i = 0; i < this.length; i++){
            newArroz[i] = this[i]
        }
        return newArroz
    } else {
        for (var i = 0; i < this.length; i++){
            newArroz[i] = callback(this[i])
        }
        return newArroz
    }
}

Arroz.prototype.includes = function(value, fromIndex) {

    var targetIndex = 0

    if (arguments.length > 1)
        if (fromIndex > -1)
            targetIndex = fromIndex
        else
            targetIndex = this.length + fromIndex

    for (var i = targetIndex; i < this.length; i++) {
        var element = this[i]

        if (element === value)
            return true
    }

    return false
}

Arroz.prototype.indexOf = function(element, index) {

    if (index >= this.length) {

        return -1
    } else if (index < 0 && this.length + index < 0 || index === undefined) {
        for (var i = 0; i < this.length; i++) {
            if (this[i] === element) {
                return i
            }
        }
    } else if (index < 0 && this.length + index > 0) {
        for (var i = this.length + index; i < this.length; i++) {
            if (this[i] === element) {
                return i
            }
        }
    } else {
        for (var i = index; i < this.length; i++) {
            if (this[i] === element) {
                return i
            }
        }
    }
    return -1
}

Arroz.prototype.join = function(separator) {
    let string = ''
    if (separator === undefined)
        separator = ','
    for (var i = 0; i < this.length -1; i++){
        if (this[i] instanceof Array === false)
            string += this[i] + separator
        else 
            string += joinArray(this[i]) + separator
    }
    if (this[this.length -1] instanceof Array === false)
        if (this.length === 0)
            string += ''
        else
            string += this[this.length -1]
    else
        string += joinArray(this[i])    
    return string
}

Arroz.prototype.map = function(callback) {
    var newArroz = []

    for (var i = 0; i < this.length; i++) {
        newArroz[newArroz.length] = callback(this[i])
    }

        return newArroz

}

Arroz.prototype.reduce = function(callback, init) {
    if (arguments.length > 1){

        var acumulator = init;
        for (let i = 0; i < this.length; i++){
            acumulator = callback(acumulator, this[i])
        }
        return acumulator

    } else {
        var acumulator = this[0]
        for (let i = 1; i < this.length; i++){
            acumulator = callback(acumulator, this[i])
        }
        return acumulator
    }
}

Arroz.prototype.shift = function() {
  
    var first = this[0]

    delete this[0]

    this.length--

    return first

}

Arroz.prototype.slice = function (start, end) {
    var result = []
    if (start < 0) {
        start = this.length + start
    }
    if (end < 0) {
        end = this.length + end
    }
    if (start == undefined) {
        start = 0
    }
    if (end == undefined) {
        end = this.length
    }

    if (start >= this.length || end <= start) {
        return undefined
    } else {
        for (var i = start; i < end; i++) {
            if (this[i] != ' ') {
                result[result.length] = this[i]
            } else result[result.length] = ''
        }
    }

    return result
}

Arroz.prototype.some = function (callback) {
    for (var i = 0; i < this.length; i++) {
        var element = this[i]

        if (callback(element)) {

            return true
        }

    }

    return false
}

Arroz.prototype.splice = function (start, deleteCount, item) {
    if (deleteCount === 0) {
        for (var i = array.length - 1; i > start - 1; i--) {
            var elem = array[i]

            array[i + 1] = elem
        }

        array[start] = item

        return []
    } else if (deleteCount === 1) {
        var removed = []

        removed[removed.length] = array[start]

        array[start] = item

        return removed
    } else if (deleteCount >= 2) {
        var removed = []

        for (var i = 0; i < deleteCount; i++)
            removed[removed.length] = array[start + i]

        for (var i = 0; i < array.length - (start + deleteCount - 1); i++) {
            var elem = array[start + deleteCount + i]
            array[start + 1 + i] = elem
        }

        array.length -= deleteCount - 1

        array[start] = item

        return removed
    }
}

Arroz.prototype.unshift = function () {
    var argLen = arguments.length
    var newLen = argLen + this.length
    for (var i = newLen - 1; i > 0; i--) {
        this[i] = this[i - arguments.length]
    }
    for (var i = 0; i < argLen; i++) {
        this[i] = arguments[i]
    }
    this.length = newLen

    return this.length
}

Arroz.prototype.with = function (index, value) {
    if (index >= this.length || index < -this.length) {
        throw new RangeError('Invalid index : ' + index)
    }
    if (index < 0) {
        index = this.length + index
    }
    var newArr = this
    newArr[index] = value
    return newArr
}


module.exports = Arroz