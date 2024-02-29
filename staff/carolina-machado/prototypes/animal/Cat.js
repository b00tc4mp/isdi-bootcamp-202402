var Pet = require('./Pet')

function Cat(owner, name, birthdate, country, weight) {

    Pet.call(this, owner, name, birthdate, country, weight)

    this.jumping = ''
    this.curiosity = 0
    this.deepsleep = false
    this.snoring = ''
    this.dirtness = 0
    this.cleaningbody = false
}

Cat.prototype = Object.create(Pet.prototype)
Cat.prototype.constructor = Cat


Cat.prototype.jump = function (curiosity) {
    this.curiosity = curiosity

    if (this.curiosity > 2) {
        this.jumping = 'big jump'
    } else if (this.curiosity = 2) {
        this.jumping = 'basic jump'
    } else {
        (this.jumping = 'lame jump')}

}

Cat.prototype.snore = function(deepsleep) {
    if (this.sleeping === false) throw new Error ('cant snore when awake')

    this.deepsleep = true
    console.log(this.snoring = 'RRRRRRRRRRRRR')
}

Cat.prototype.shower = function(dirtness) {
    if (this.sleeping) throw new Error ('cant shower when sleeping')

this.dirtness = dirtness
this.cleaningbody = true

if (dirtness === 'very dirty') {
    this.cleaningbody = 'strong cleaning' 
} else if (dirtness === 'dirty') {
    this.cleaningbody = 'normal cleaning' 
} else if (dirtness === 'not dirty') {
    this.cleaningbody = 'light cleaning' 
}

}


module.exports = Cat