function Person(name, age, hairColor,) {
    this.name = name
    this.age = age
    this.status = 'awake'

}

Person.prototype.walk = function (where) {
    console.log("I'm walking to the " + where)
}

Person.prototype.speak = function (str) {
    console.log(str)
}

Person.prototype.sleep = function () {
    this.status = 'asleep'
    console.log('ZzzZzz')
}

Person.prototype.wakeUp = function () {
    this.status = 'awake'
    console.log('Good Morning!')
}


module.exports = Person