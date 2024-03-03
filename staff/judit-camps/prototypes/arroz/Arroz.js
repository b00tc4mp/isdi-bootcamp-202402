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

Arroz.prototype.toString = function () {
    var string = 'Arroz ['

    for (var i = 0; i < this.length; i++) {
        var elem = this[i]
        string += elem

        if (i < this.length - 1) {
            string += ', '
        }
    }
    string += ']'

    return string
}

Arroz.prototype.push = function () {
    for (var i = 0; i < arguments.length; i++) {
        var value = arguments[i]
        this[this.length] = value
        this.length++
    }
    return this.length
}

Arroz.prototype.pop = function () {
    if (this.length > 0) {
        var lastElem = this[this.length - 1]
        delete this[this.length - 1]
        this.length--
        return lastElem
    }
}


Arroz.prototype.at = function (index) {
    if (index < 0) {
        index = this.length + index
    }
    return this[index]
}

Arroz.prototype.find = function (callback) {
    for (var i = 0; i < this.length; i++) {
        var elem = this[i]
        if (callback(elem, i, this)) {
            return this[i]
        }
    }
}

Arroz.prototype.concat = function () {
    var newArr = this
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] instanceof Arroz) {
            for (var j = 0; j < arguments[i].length; j++) {
                newArr[newArr.length] = arguments[i][j]
                newArr.length++
            }
        } else {
            newArr[newArr.length] = arguments[i]
            newArr.length++
        }
    }
    return newArr
}

Arroz.prototype.every = function (callback) {
    for (var i = 0; i < this.length; i++) {
        var elem = this[i]
        if (!callback(elem, i, this) && elem !== undefined) {
            return false
        }
    } return true
}

Arroz.prototype.filter = function (callback) {
    var result = new Arroz
    for (var i = 0; i < this.length; i++) {
        var elem = this[i]
        if (callback(elem, i, this)) {
            result[result.length] = elem
            result.length++
        }
    }
    return result
}

Arroz.prototype.shift = function () {
    var first = this[0]

    for (var i = 0; i < this.length; i++) {
        this[i] = this[i + 1]
    }

    if (this.length > 0) {
        this.length--
    } else this.length = 0

    return first
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