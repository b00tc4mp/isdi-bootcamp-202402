var matcha = require('./matcha')

var Arroz = require('./Arroz')

matcha.describe('Arroz', function () {
    matcha.describe('> constructor', function () {
        matcha.it('should construct', function () {
            var a = new Arroz

            matcha.expect(a).toBeInstanceOf(Arroz)
            matcha.expect(a.length).toBe(0)
        })

        matcha.it('should construct with multiple values', function () {
            var a = new Arroz(10, 20, 30)

            matcha.expect(a).toBeInstanceOf(Arroz)
            matcha.expect(a.length).toBe(3)
            matcha.expect(a[0]).toBe(10)
            matcha.expect(a[1]).toBe(20)
            matcha.expect(a[2]).toBe(30)
        })

        matcha.it('should construct with one non-numeric value', function () {
            var a = new Arroz(true)

            matcha.expect(a).toBeInstanceOf(Arroz)
            matcha.expect(a.length).toBe(1)
            matcha.expect(a[0]).toBe(true)
        })

        matcha.it('should construct with one numeric value', function () {
            var a = new Arroz(5)

            matcha.expect(a).toBeInstanceOf(Arroz)
            matcha.expect(a.length).toBe(5)
            for (var i = 0; i < a.length; i++)
                matcha.expect(a[i]).toBe(undefined)
        })
    })

    matcha.describe('> push', function () {
        matcha.it('should push a value', function () {
            var a = new Arroz(10, 20, 30)

            matcha.expect(!!a.push).toBe(true)

            var length = a.push(40)

            matcha.expect(a.length).toBe(4)
            matcha.expect(a[a.length - 1]).toBe(40)
            matcha.expect(length).toBe(4)
        })

        matcha.it('should push many values', function () {
            var a = new Arroz(10, 20, 30)

            matcha.expect(!!a.push).toBe(true)

            var length = a.push(40, 50, 60, 70)

            matcha.expect(a.length).toBe(7)
            matcha.expect(a[3]).toBe(40)
            matcha.expect(a[4]).toBe(50)
            matcha.expect(a[5]).toBe(60)
            matcha.expect(a[6]).toBe(70)
            matcha.expect(length).toBe(7)
        })
    })

    matcha.describe('> pop', function () {
        matcha.it('should extract last value', function () {
            var a = new Arroz(10, 20, 30)

            matcha.expect(!!a.pop).toBe(true)

            var value = a.pop()

            matcha.expect(a.length).toBe(2)
            matcha.expect(a[0]).toBe(10)
            matcha.expect(a[1]).toBe(20)
            matcha.expect(a[2]).toBe(undefined)
            matcha.expect(value).toBe(30)
        })
    })

    matcha.describe('> toString', function () {
        matcha.it('should convert to string', function () {
            var a = new Arroz(10, 20, 30, 40, 50)

            matcha.expect(!!a.toString).toBe(true)

            var string = a.toString()

            matcha.expect(string).toBe('Arroz [10, 20, 30, 40, 50]')
        })
    })

    matcha.describe('> at', function () {
        matcha.it('should return the value of a positive index', function () {
            var a = new Arroz(10, 20, 30)

            matcha.expect(!!a.at).toBe(true)

            var result = a.at(1)

            matcha.expect(result).toBe(20)

        })

        matcha.it('should return an specific value at a negative index', function () {
            var a = new Arroz(10, 20, 30)

            matcha.expect(!!a.at).toBe(true)

            var result = a.at(-3)

            matcha.expect(result).toBe(10)

        })


    })

    matcha.describe('> concat', function () {
        matcha.it('should merge 2 or more arroces and return it, without mutating the original arroces', function () {
            var a = new Arroz(10, 20, 30)
            var b = new Arroz(40, 50)
            var c = new Arroz(60)

            matcha.expect(!!a.concat).toBe(true)
            matcha.expect(!!b.concat).toBe(true)
            matcha.expect(!!c.concat).toBe(true)

            var result = a.concat(b)

            matcha.expect(result[0]).toBe(10)
            matcha.expect(result[1]).toBe(20)
            matcha.expect(result[2]).toBe(30)
            matcha.expect(result[3]).toBe(40)
            matcha.expect(result[4]).toBe(50)
        })



    })

    matcha.describe('> every', function () {
        matcha.it('tests that all elements in the array pass the callback test, returning a Boolean', function () {
            var a = new Arroz(2, 4, 6, 8)

            matcha.expect(!!a.every).toBe(true)

            function callback(num) {
                return num % 2 === 0
            }

            var result = a.every(callback)

            matcha.expect(result).toBe(true)

        })
    })

    matcha.describe('> filter', function () {
        matcha.it('should return the elements of arroz that pass the callback test', function () {

            var a = new Arroz(5, 10, 15, 20)

            matcha.expect(!!a.filter).toBe(true)


            function callback(num) {
                return num > 10
            }
            var result = a.filter(callback)

            matcha.expect(result[0]).toBe(15)
            matcha.expect(result[1]).toBe(20)
            matcha.expect(a[0]).toBe(5)
            matcha.expect(a[1]).toBe(10)
            matcha.expect(a[2]).toBe(15)
            matcha.expect(a[3]).toBe(20)


        })

    })
    
    matcha.describe('> find', function () {
        matcha.it('should return the first element in the provided array that satisfies the provided testing function.', function () {
    
            var a = new Arroz(5, 10, 15, 20)
    
            matcha.expect(!!a.find).toBe(true)

            function callback(num) {
                return num > 10
            }
            var result = a.find(callback)

            matcha.expect(result).toBe(15)
            matcha.expect(a[0]).toBe(5)
            matcha.expect(a[1]).toBe(10)
            matcha.expect(a[2]).toBe(15)
            matcha.expect(a[3]).toBe(20)

        })


    })

    matcha.describe('> forEach', function() {
        matcha.it('should execute a provided function once for each array element.', function() {

            var a = new Arroz(10, 20, 30)

            matcha.expect(!!a.forEach).toBe(true)

            var other = []
            
            function callback(num, index) {
                other[other.length] = num + index

                return other
            }


            matcha.expect(other[1]).toBe(21)


        })
        
    })

    matcha.describe('> from', function () {
        matcha.it('should create a new Arroz instance from an iterable or array-like object.', function () {
    
            var a = new Arroz('carolina')
    
            matcha.expect(!!a.from).toBe(true)

            var result = a.from()

           /*
            matcha.expect(result[0]).toBe('c')
            matcha.expect(result[1]).toBe('a')
            matcha.expect(result[2]).toBe('r')
            matcha.expect(result[3]).toBe('o')
            matcha.expect(result[4]).toBe('l')
            matcha.expect(result[5]).toBe('i')
            matcha.expect(result[6]).toBe('n')
            matcha.expect(result[7]).toBe('a')
        */

        })


    })
    matcha.describe('> includes', function() {
        matcha.it('should determine if an array includes a  value, returning true or false.', function() {

            var a = new Arroz(2, 5, 7, 23)

            matcha.expect(!!a.includes).toBe(true)

            var result = a.includes(2, 0)

            matcha.expect(result).toBe(true)

        })


    })
    
    
    matcha.describe('> join', function() {
        matcha.it('creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string.', function() {

            var a = new Arroz('bem', 'vindos')

            matcha.expect(!!a.join).toBe(true)
            
            var result = a.join('-')

            matcha.expect(result).toBe('bem-vindos')
            

        })
    })

    matcha.describe('> map', function() {
        matcha.it('creates a new array with the results of every element of a callback function.', function() {

            var a = new Arroz(2, 5, 7)

            matcha.expect(!!a.map).toBe(true)

            function callback(num) {
                return num * 2
            }
            
            var result = a.map(callback)

            matcha.expect(result[0]).toBe(4)
            matcha.expect(result[1]).toBe(10)
            matcha.expect(result[2]).toBe(14)
        

        })
    })

    matcha.describe('> reduce', function() {
        matcha.it('creates a new array with the results of every element of a callback function.', function() {

            var a = new Arroz(2, 5, 7)

            matcha.expect(!!a.reduce).toBe(true)

            function callback(accum, num) {
                return accum * num
            }
            
            var result = a.reduce(callback)

            matcha.expect(result).toBe(70)
            
        

        })
    })

    matcha.describe('> shift', function() {
        matcha.it('should remove the first element and return it.', function() {

            var a = new Arroz(2, 5, 7)

            matcha.expect(!!a.shift).toBe(true)
            
            var result = a.shift()

            matcha.expect(result).toBe(2)
            matcha.expect(a.length).toBe(2)
        

        })
    })

    matcha.describe('> slice', function() {
        matcha.it('should return values from start to end (end not included) where start and end represent the index of items in that array', function() {

            var a = new Arroz(2, 5, 7, 8, 9)

            matcha.expect(!!a.slice).toBe(true)
            
            var result = a.slice(2, 4)

            matcha.expect(result[0]).toBe(7)
            matcha.expect(result[1]).toBe(8)
            matcha.expect(result[2]).toBe(undefined)
        

        })
    })

    matcha.describe('> some', function() {
        matcha.it('should return values from start to end (end not included) where start and end represent the index of items in that array', function() {

            var a = new Arroz(2, 5, 7, 18, 9)

            matcha.expect(!!a.some).toBe(true)
            function callback(num) {
                return num > 10
            }
            var result = a.some(callback)

            matcha.expect(result).toBe(true)

        })
    })

})


