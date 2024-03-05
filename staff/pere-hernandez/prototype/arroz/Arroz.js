function Arroz() {
    if (arguments.length !== 1){
        this.length = arguments.length

        for(var i = 0; i < arguments.length; i++){
            this[i] = arguments[i]
        }

    } else {
        if (Number.isInteger(arguments[0])){
            this.length = arguments[0]

            return
        }

        this[0] = arguments[0]
        this.length = 1
    }    
}

Arroz.prototype.at = function(index){
    if (index > -1 && index < this.length){
        return this[index]
    } else if (index < 0 && (index * -1) < this.length)
        return this[this.length + index]
    return undefined
}

Arroz.prototype.concat = function(){
    var returnedArroz = new Arroz()

    for (var i = 0; i < this.length; i++){
        returnedArroz[returnedArroz.length] = this[i]
        returnedArroz.length++
    }

    for (var i = 0; i < arguments.length; i++){
        if (arguments[i] instanceof Arroz){
            for (let j = 0; j < arguments[i].length; j++){
                returnedArroz[returnedArroz.length] = arguments[i][j]
                returnedArroz.length++            
            }
        } else {
            returnedArroz[returnedArroz.length] = arguments[i]
            returnedArroz.length++            
        }
        
    }
    return returnedArroz
}

Arroz.prototype.every = function(callback){
    for (var i = 0; i < this.length; i++){
        if (callback(this[i]) === false)
            return false
    }
    return true
}

Arroz.prototype.filter = function(callback){
    var returnedArroz = new Arroz()
    for (var i = 0; i < this.length; i++){
        if (callback(this[i]) === true)
            returnedArroz.push(this[i])
    }
    return returnedArroz
}

Arroz.prototype.forEach = function(callback){
    for (let i = 0; i < this.length; i++){
        callback(this[i])
    }
}

Arroz.prototype.find = function(callback){
    var match = undefined
    for (var i = 0; i < this.length; i++){
        if (callback(this[i]) === true){
            match = this[i]
            return match
        }            
    }
    return match
}

Arroz.prototype.findIndex = function(callback){
    var index = -1
    for (var i = 0; i < this.length; i++){
        if (callback(this[i]) === true){
            index = i
            return index
        }
    }
    return index
}



Arroz.from = function(element, callback){
    var returnedArroz = new Arroz()

    if (!callback){        
        for (var i = 0; i < element.length; i++){
            returnedArroz[returnedArroz.length] = element[i]
            returnedArroz.length++
        }
    } else {
        for (var i = 0; i < element.length; i++){
            returnedArroz[returnedArroz.length] = callback(element[i])
            returnedArroz.length++
        }
    }
    
    return returnedArroz
}

Arroz.prototype.includes = function(){
    if (arguments.length === 1){
        for (let i = 0; i < this.length; i++){
            if (this[i] === arguments[0])
            return true
        }
    } else {
        for (let i = arguments[1]; i < this.length; i++){
            if (this[i] === arguments[0])
            return true
        }
    }    
    return false
}

Arroz.prototype.indexOf = function(value, index){
    if (!Number.isInteger(index)){
        for (let i = 0; i < this.length; i++){
            if (this[i] === value)
            return i
        }
    } else if (index > -1 && index < this.length){
        for (let i = index; i < this.length; i++){
            if (this[i] === value)
            return i
        }
    } else if (index < 0 && (index * -1) < this.length){
        for (let i = this.length - 1; i >= (index * -1); i--){
            if (this[i] === value)
            return i
        }
    }
    return -1
}

Arroz.prototype.join = function(separator){
    if (separator === undefined)
        separator = ','

    let string = ''
    for (let i = 0; i < this.length -1; i++){
        if (this[i] instanceof Arroz === false)
            string += this[i] + separator
        else 
            string += this[i].join() + separator
    }

    if (this[this.length - 1] instanceof Arroz === false){
        if (this.length === 0)
            string += ''
        else
            string += this[this.length - 1]        
    } else 
        string += this[this.length - 1].join()
    
    return string
}

Arroz.prototype.lastIndexOf = function(value, index){
    if (index === undefined){
        for (let i = this.length - 1; i > -1; i--){
            if (this[i] === value)
                return i
        }
    } else if (index > -1){
        for(let i = index; i > -1; i--){
            if (this[i] === value)
                return i
        }
    } else if (index < 0){
        for(let i = this.length + index; i > -1; i++){
            if (this[i] === value)
                return i
        }
    }
    
    return -1
}

Arroz.prototype.map = function(callback) {
    var returnedArroz = new Arroz()
    for (var i = 0; i < this.length; i++){
        returnedArroz[returnedArroz.length] = (callback(this[i]))
        returnedArroz.length++
    }
        
    return returnedArroz
}

Arroz.prototype.pop = function(){
    var popped = this[this.length - 1]
    delete this[this.length - 1]
    this.length--
    return popped
}

Arroz.prototype.push = function(){
    for (var i = 0; i < arguments.length; i++){
        this[this.length] = arguments[i]
        this.length++
    }
    return this.length
}

Arroz.prototype.reduce = function(callabck, init){
    if (init === undefined){
        var accumulator = this[0]
        for (let i = 1; i < this.length; i++){
            accumulator = callabck(accumulator, this[i])
        }
    } else {
        var accumulator = init
        for (let i = 0; i < this.length; i++){
            accumulator = callabck(accumulator, this[i])
        }
    }
    return accumulator     
}

Arroz.prototype.toString = function() {
    var string = 'Arroz ['

    for (var i = 0; i < this.length; i++){
        string += this[i]
        if (i < this.length -1)
            string += ', '
    }

    string += ']'

    return string
}

Arroz.prototype.shift = function(){
    var first = this[0]

    for (var i = 0; i < this.length; i++){
        this[i] = this[i + 1]
    }
    if (this.length > 0)
        this.length--
    return first
}


Arroz.prototype.slice = function(indexStart, indexEnd){
    var slicedArroz = new Arroz()
    if (indexEnd !== undefined){
        if (indexStart > -1)
            var start = indexStart
        else
            var start = this.length + start

        if (indexEnd > -1)
            var end = indexEnd
        else
            var end = this.length + indexEnd

        for (var i = start; i <= end; i++){
            slicedArroz[slicedArroz.length] = this[i]
            slicedArroz.length++
            this[i] = this[i + end]
        }
        for (let i = this.length - 1; i > (end - start - 1); i--){
            delete this[i]
        }
        this.length = this.length - (end - start) -1            

    } else {
        if (indexStart > -1)
            var start = indexStart
        else 
            var start = this.length + indexStart

        for (var i = start; i < this.length; i++){
            slicedArroz[slicedArroz.length] = this[i]
            slicedArroz.length++
            delete this[i]
        }
        this.length = start
    }
    
    return slicedArroz
}

Arroz.prototype.some = function(callabck){
    for (var i = 0; i < this.length; i++){
        if (callabck(this[i]) === true)
            return true
    }
    return false
}

//WIP splice

Arroz.prototype.splice = function(start, deleteCount, value){
    this.length = this.length - deleteCount + 1
    for (var i = this.length - 1; i > start; i--){
        this[i] = this[i - 1]
    }
    this[start] = value
    return undefined
}


//WIP unshift, with

module.exports = Arroz