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


    if (index > -1) {
        var searchIndex = this[index];

        return searchIndex

    } else if (index < 0) {

        var searchIndex = this.length + index;

        return this[searchIndex];


    } else if (index === undefined) {
        var searchIndex = this[0]
        return searchIndex

    }

}

Arroz.prototype.concat = function () {
    var resultArroz = new Arroz()

    for (var i = 0; i < this.length; i++) {
        resultArroz[resultArroz.length] = this[i];
        resultArroz.length++;
    }
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] instanceof Arroz) {
            var elem = arguments[i]
            for (var j = 0; j < elem.length; j++) {
                resultArroz[resultArroz.length] = elem[j]
                resultArroz.length++
            }
        } else {
            resultArroz[resultArroz.length] = arguments[i]
            resultArroz.length++
        }
    }

    return resultArroz

}

// Arroz.prototype.copyWithin = function (target, start, end) {

//     for (var i = end; i < this.length; i--) {
//         if (i === target) {
//             this[i] = this[start]
//             break
//         }
//     }
//     return this
// }

Arroz.prototype.every = function (callback) {

    for (var i = 0; i < this.length; i++) {
        if (callback(this[i]) === false) {
            return false
        }
    }
    return true
}

Arroz.prototype.filter = function (callback) {
    var newObject = new Arroz()

    for (var i = 0; i < this.length; i++) {
        if (callback(this[i]) === true) {
            newObject[newObject.length] = this[i];
            newObject.length++;
        }
    }
    return newObject
}

Arroz.prototype.with = function (index, value) {
    var newArroz = new Arroz()
    // index = index < 0 ? index + this.length : index;

    // if (index > this.length || index < this.length) {
    //     throw new RangeError('ojo Error')
    // }

    for (var i = 0; i < this.length; i++) {
        var elem = this[i]
        if (i === index) {
            newArroz[newArroz.length] = value
            newArroz.length++
        }
        newArroz[newArroz.length] = elem;
        newArroz.length++;
    }
    return newArroz
}

Arroz.prototype.map = function (callback) {
    var newArroz = new Arroz()


    for (var i = 0; i < this.length; i++) {
        var elem = callback(this[i]);
        newArroz[newArroz.length] = elem
        newArroz.length++

    }
    return newArroz
}

Arroz.prototype.reduce = function (callback, initialValue) {

    var accumulator = initialValue;
    if (initialValue === undefined) {
        accumulator = 0
        for (var i = 0; i < this.length; i++) {

            var elem = this[i];
            accumulator = callback(accumulator, elem);

        }
    } else {
        for (var i = 0; i < this.length; i++) {

            var elem = this[i];
            accumulator = callback(accumulator, elem);
        }
    }
    return accumulator
}

Arroz.prototype.includes = function (searchElement, indexFrom) {
    var indexFrom = indexFrom < 0 ? indexFrom + this.length : indexFrom;

    if (indexFrom < this.length || indexFrom < -this.length || !indexFrom)
        for (var i = 0; i < this.length; i++) {
            var elem = this[i];
            if (elem === searchElement) {
                return true;
            }
        }
    return false;
};


Arroz.prototype.join = function (separator) {
    var separator = separator;
    var string = "";

    for (var i = 0; i < this.length; i++) {
        var elem = this[i];
        string += elem;
        if (i < this.length - 1) string += separator;
    }

    return string;
}


Arroz.prototype.findIndex = function (callback) {
    if (typeof callback !== "function") {
        throw new TypeError("undefined is not a function");
    }

    for (var i = 0; i < this.length; i++) {
        var elem = this[i];
        var match = callback(elem);
        if (match) {
            return i;
        }
    }

    return -1;
}

Arroz.prototype.shift = function () {
    var shifted = this[0];
    for (var i = 0; i < this.length; i++) {
        this[i] = this[i + 1];
    }
    delete this[this.length];
    this.length--;

    return shifted;
};

Arroz.prototype.unShift = function () {
    var length = arguments.length + this.length;
    for (var i = length - 1; i > -1; i--) {
        this[i] = this[i - arguments.length];
    }
    for (var i = 0; i < arguments.length; i++) {
        this[i] = arguments[i];
    }
    return (this.length = length);
};












module.exports = Arroz