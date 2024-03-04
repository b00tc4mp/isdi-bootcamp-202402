var Animals = require('./animals')



function Dog() {
this.move = false
this.breathe = true
this.sleep = false
this.moveLegs = 0
this.noise = ''
this.eat = ''
this.makeNoise = ''
}

Object.create(Animals.prototype)

Animals.NOT_WALK = 0
Animals.WALK_NORMAL = 1
Animals.RUN = 2




module.exports = Animals
