const assert = require('./assert')

const Animal = require('./Animal')
const Pet = require('./Pet')
const Person = require('./Person')
const Cat = require('./Cat')

console.log('TEST Cat')

console.log('CASE constructor')
{
    const peter = new Person('Peter', 'Pan', new Date(2000, 0, 31, 16, 45), 'GB', 140, 50)
    const mia = new Cat(peter, 'Mia', new Date(2012, 0, 31, 16, 45), 'ES', 8)

    assert.equalsValue(mia.constructor, Cat)
    assert.instanceOf(mia, Cat)
    assert.instanceOf(mia, Pet)
    assert.instanceOf(mia, Animal)

    assert.equalsValue(mia.name, 'Mia')
    assert.equalsValue(mia.country, 'ES')
    assert.instanceOf(mia.birthdate, Date)
    assert.equalsValue(mia.weight, 8)
    assert.equalsValue(mia.sleeping, false)
    assert.equalsValue(mia.eating, '')
    assert.equalsValue(mia.jumping, '')
}

console.log('CASE jump')
{
var peter = new Person('Peter', 'Pan', new Date(2000, 0, 31, 16, 45), 'GB', 140, 50)
const mia = new Cat(peter, 'Mia', new Date(2012, 0, 31, 16, 45), 'ES', 8)

mia.awake()

mia.jump(3)

assert.equalsValue(mia.jumping, 'big jump')
}

console.log('CASE snore')
{
var peter = new Person('Peter', 'Pan', new Date(2000, 0, 31, 16, 45), 'GB', 140, 50)
const mia = new Cat(peter, 'Mia', new Date(2012, 0, 31, 16, 45), 'ES', 8)

mia.sleep()

mia.deepsleep = true

mia.snore()

assert.equalsValue(mia.snoring, 'RRRRRRRRRRRRR')
}


