module.exports = Animals;

function Animals(name, species, age) {
    this.name = name;
    this.species = species;
    this.age = age;
    this.moving = false;
    this.breathing = false;
    this.eating = false;
    this.energy = 100;

}

Animals.prototype.move = function () {
    this.moving = true
    if (this.moving === true) {
        this.energy -= 10
        if (this.energy < 0 || this.energy >= 10) {
            throw new Error(this.name + 'is death')

        }
    }
}

Animals.prototype.breathe = function () {
    this.breathing = true
}

Animals.prototype.eat = function () {
    this.eating = true
    if (this.energy < 90) {
        this.energy += 10
    }
    else if (this.energy > 90) {
        this.energy = 100
    }
}

// Animals.prototype.setInterval = function(myCallback,)
// const intervalID = setInterval(myCallback, 500, "Parameter 1", "Parameter 2");

// function myCallback(a, b) {
//   // Your code here
//   // Parameters are purely optional.
//   console.log(a);
//   console.log(b);
// }

