function Animals(name, breed, age, weight, gender,) {
    this.name = name
    this.species = species
    this.age = age
    this.weight = weight
    this.gender = gender
    this.move = false
    this.breathe = true
    this.sleep = false
    this.moveLegs = 0
    this.noise = ''
    this.eat = ''
    this.makeNoise = ''
}

Animals.NOT_WALK = 0
Animals.WALK_NORMAL = 1
Animals.RUN = 2


Animals.prototype.moving = function () {
    this.move = true
}



Animals.prototype.stopping = function () {
    this.move = false
}

Animals.prototype.breathing = function () {
    this.breathe = true
}

Animals.prototype.sleeping = function () {
    this.sleep = true
}

Animals.prototype.awaking = function () {
    this.sleep = false
}

Animals.prototype.eating = function (food) {
    if (typeof food !== 'string') {
        throw new Error('please, put a string');

    } else {
        this.eat = food
    }
}


Animals.prototype.running = function (speed) {
    this.moveLegs = speed
}

Animals.prototype.makingNoise = function (noise) {
    this.makeNoise = noise
}

 

module.exports = Animals
