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


module.exports = Arroz