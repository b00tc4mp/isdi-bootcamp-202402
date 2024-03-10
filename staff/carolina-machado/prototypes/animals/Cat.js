const Pet = require('./Pet')



class Cat extends Pet {
    constructor(owner, name, birthdate, country, weight) {

        super(owner, name, birthdate, country, weight)


        this.jumping = ''
        this.curiosity = 0
        this.deepsleep = false
        this.snoring = ''
        this.dirtness = 0
        this.cleaningbody = false
        this.sleeping = false

    }

    jump(curiosity) {
        this.curiosity = curiosity


        if (this.curiosity > 2) {
            this.jumping = 'big jump'
        } else if (this.curiosity === 2) {
            this.jumping = 'basic jump'
        } else {
            (this.jumping = 'lame jump')
        }

    }

    snore(deepsleep) {
        if (this.sleeping === false) throw new Error('cant snore when awake')

        if (this.deepsleep = true) {

            this.snoring = 'RRRRRRRRRRRRR'
        }

    
    }

    shower(dirtness) {
        if (this.sleeping) throw new Error('cant shower when sleeping')

        if (dirtness === 'very dirty') {
            this.cleaningbody = 'strong cleaning'
        } else if (dirtness === 'dirty') {
            this.cleaningbody = 'normal cleaning'
        } else if (dirtness === 'not dirty') {
            this.cleaningbody = 'light cleaning'
        }

    }
}

module.exports = Cat