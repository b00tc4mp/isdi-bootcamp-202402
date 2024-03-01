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

Arroz.prototype.push = function(){
    for (var i = 0; i < arguments.length; i++){
        this[this.length] = arguments[i]
        this.length++
    }
    return this.length
}

Arroz.prototype.pop = function(){
    var popped = this[this.length - 1]
    delete this[this.length - 1]
    this.length--
    return popped
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


module.exports = Arroz