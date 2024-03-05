function Arroz () {
    if (arguments.length !== 1) {
        this.length = arguments.length

        for (var i = 0; i < arguments.length; i++) {
            var arguments = arguments[i]

            this[i] = argument
            
        }
        
    }else {
        var argument = arguments[0]

        if (typeof argument === 'number') {
            this.length = argument
            return
        }

        this[0] = argument
        this.length = 1
    }

}

Arroz.prototype.push = function(){
    for (var i = 0; i < arguments.length; i++) {
        var argument = arguments[i]
        
        this[this.length] = argument
        this.length++
    }
    return this.length
}

Arroz.prototype.pop = function(){
    var lastIndex = this.length - 1

    var last = this[lastIndex]
    delete this[lastIndex]

    this.length--

    return last
}

Arroz.prototype.toString = function(){
    var string = 'Arroz ['

    for (var i = 0; i < this.length; i++) {
        var element = this[i]

        string += element

        if(i<this.length - 1)
            string += ', '
        
    }

    string += ']'

    return string
}

Arroz.prototype.concat = function(){
    for (var i = 0; i < arguments.length; i++) {
        var element = arguments[i]
        
        var string = 'Arroz ['

        string = string + element

    }

    string += ']'

    return string
}

Arroz.prototype.at = function(index){
    for (var i = 0; i < this.length; i++) {
        var element = this[i] 

        if(i === index)

        element = i
        
        return element
    } 
}

Arroz.prototype.with = function (index, value) {
    var newArray = []

    if(index > -1){
        for (var i = 0; i < this.length; i++) {
            newArray[i] = []
            if (i === index - 1) {
                newArray[i] = value
            } else{
                newArray[i] = this[i]
            }
            
        }
    } else if (index < 0){
        for (var i = 0; i < this.length - 1; i++) {
            newArray[i] = this[i + 1]
        }
        newArray[this.length - 1] = value
    }
    return newArray
}

module.exports = Arroz 