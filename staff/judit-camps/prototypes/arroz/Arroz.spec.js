var Arroz = require('./Arroz')
var matcha = require('./matcha')

matcha.describe('Arroz', function () {
    matcha.describe('> Constructor', function () {
        matcha.it('Should construct', function () {
            var a = new Arroz

            matcha.expect(a).toBeInstanceOf(Arroz)
            matcha.expect(a.length).toBe(0)
        })

        matcha.it('Should construct with multiple values', function () {
            var a = new Arroz(10, 20, 30)

            matcha.expect(a).toBeInstanceOf(Arroz)
            matcha.expect(a.length).toBe(3)
            matcha.expect(a[0]).toBe(10)
            matcha.expect(a[1]).toBe(20)
            matcha.expect(a[2]).toBe(30)
        })

        matcha.it('Should construct with one non-numeric value', function () {
            var a = new Arroz(true)

            matcha.expect(a).toBeInstanceOf(Arroz)
            matcha.expect(a.length).toBe(1)
            matcha.expect(a[0]).toBe(true)
        })

        matcha.it('Should construct with one numeric value', function () {
            var a = new Arroz(5)

            matcha.expect(a).toBeInstanceOf(Arroz)
            matcha.expect(a.length).toBe(5)
            for (var i = 0; i < a.length; i++) {
                matcha.expect(a[i]).toBe(undefined)
            }
        })
    })

    matcha.describe('> push', function () {
        matcha.it('Should add a value', function () {
            var a = new Arroz(10, 20, 30)

            matcha.expect(!!a.push).toBe(true)
            var newLength = a.push(40)

            matcha.expect(a).toBeInstanceOf(Arroz)
            matcha.expect(newLength).toBe(4)
            matcha.expect(a[3]).toBe(40)
        })
    })
    matcha.it('Should add more than one value', function () {
        var a = new Arroz(10, 20, 30)

        matcha.expect(!!a.push).toBe(true)
        var newLength = a.push(40, 50, 60, 70)

        matcha.expect(a).toBeInstanceOf(Arroz)
        matcha.expect(newLength).toBe(7)
        matcha.expect(a[3]).toBe(40)
        matcha.expect(a[4]).toBe(50)
        matcha.expect(a[5]).toBe(60)
        matcha.expect(a[6]).toBe(70)

    })

    matcha.describe('> pop', function () {
        matcha.it('Should remove the last element', function () {
            var a = new Arroz(10, 20, 30, 40)

            matcha.expect(!!a.pop).toBe(true)
            matcha.expect(a).toBeInstanceOf(Arroz)
            var popped = a.pop()
            matcha.expect(a.length).toBe(3)
            matcha.expect(popped).toBe(40)
            matcha.expect(a[0]).toBe(10)
            matcha.expect(a[1]).toBe(20)
            matcha.expect(a[2]).toBe(30)
            matcha.expect(a[3]).toBe(undefined)
        })

        matcha.it('Should return undefined in empty array', function () {
            var a = new Arroz()

            matcha.expect(!!a.pop).toBe(true)
            matcha.expect(a).toBeInstanceOf(Arroz)
            var popped = a.pop()
            matcha.expect(a.length).toBe(0)
            matcha.expect(popped).toBe(undefined)
            matcha.expect(a).toBeInstanceOf(Arroz)
        })
    })

    matcha.describe('> at', function () {
        matcha.it('Should return element at said position', function () {
            var a = new Arroz(10, 20, 30)

            matcha.expect(!!a.at).toBe(true)
            matcha.expect(a).toBeInstanceOf(Arroz)

            var result = a.at(1)
            matcha.expect(result).toBe(20)
        })

        matcha.it('Should return element at said position when negative', function () {
            var a = new Arroz(10, 20, 30)

            matcha.expect(!!a.at).toBe(true)
            matcha.expect(a).toBeInstanceOf(Arroz)

            var result = a.at(-1)
            matcha.expect(result).toBe(30)
        })

        matcha.it('Should return undefined if position doesn not match', function () {
            var a = new Arroz(10, 20, 30)

            matcha.expect(!!a.at).toBe(true)
            matcha.expect(a).toBeInstanceOf(Arroz)

            var result = a.at(3)
            matcha.expect(result).toBe(undefined)
        })
    })

    matcha.describe('> find', function () {
        matcha.it('Should return the first element that satisfies the provided function', function () {
            var a = new Arroz(5, 10, 3, 22)
            matcha.expect(a).toBeInstanceOf(Arroz)
            var result = a.find(function (x) {
                return x > 15
            })

            matcha.expect(!!a.find).toBe(true)
            matcha.expect(result).toBe(22)
        })

        matcha.it('Should return the first element that satisfies the provided function', function () {
            var a = new Arroz(5, 10, 3, 22)
            matcha.expect(a).toBeInstanceOf(Arroz)
            var result = a.find(function (x) {
                return x > 15
            })

            matcha.expect(!!a.find).toBe(true)
            matcha.expect(result).toBe(22)
        })
    })

    matcha.describe('> concat', function () {
        matcha.it('Should concatenate 2 arrays', function () {
            var a = new Arroz('a', 'b', 'c')
            var b = new Arroz(10, 20, 30)

            matcha.expect(a).toBeInstanceOf(Arroz)
            matcha.expect(b).toBeInstanceOf(Arroz)
            matcha.expect(!!a.concat).toBe(true)

            var result = a.concat(b)
            matcha.expect(result.length).toBe(6)
            var expect = new Arroz('a', 'b', 'c', 10, 20, 30)

            for (var i = 0; i < result.length; i++) {
                matcha.expect(result[i]).toBe(expect[i])
            }
        })

        matcha.it('Should concatenate 2 or more arrays', function () {
            var a = new Arroz('a', 'b', 'c')
            var b = new Arroz(10, 20, 30)
            var c = new Arroz('x', 'y', 'z')

            matcha.expect(a).toBeInstanceOf(Arroz)
            matcha.expect(b).toBeInstanceOf(Arroz)
            matcha.expect(c).toBeInstanceOf(Arroz)
            matcha.expect(!!a.concat).toBe(true)

            var result = a.concat(b, c)
            matcha.expect(result.length).toBe(9)
            var expect = new Arroz('a', 'b', 'c', 10, 20, 30, 'x', 'y', 'z')

            for (var i = 0; i < result.length; i++) {
                matcha.expect(result[i]).toBe(expect[i])
            }
        })

        matcha.it('Should concatenate array with string', function () {
            var a = new Arroz('a', 'b', 'c')
            var s = 'hello'

            matcha.expect(a).toBeInstanceOf(Arroz)
            matcha.expect(!!a.concat).toBe(true)

            var result = a.concat(s)
            matcha.expect(result.length).toBe(4)
            var expect = new Arroz('a', 'b', 'c', 'hello')

            for (var i = 0; i < result.length; i++) {
                matcha.expect(result[i]).toBe(expect[i])
            }
        })
    })

    matcha.describe('> every', function () {
        matcha.it('Should return true if all elements pass the function', function () {
            var a = new Arroz(2, 4, 6, 8)

            matcha.expect(a).toBeInstanceOf(Arroz)
            matcha.expect(!!a.every).toBe(true)

            var result = a.every(function (x) {
                return x % 2 === 0
            })

            matcha.expect(result).toBe(true)
        })
    })

    matcha.describe('> filter', function () {
        matcha.it('Should return new array with elements that pass the function', function () {
            var a = new Arroz(10, '20', 30)
            matcha.expect(a).toBeInstanceOf(Arroz)
            matcha.expect(!!a.filter).toBe(true)

            var newArr = a.filter(function (x) {
                return typeof x === 'number'
            })
            var expect = new Arroz(10, 30)
            for (var i = 0; i < newArr.length; i++) {
                matcha.expect(newArr[i]).toBe(expect[i])
            }

        })
    })

    matcha.describe('> shift', function () {
        matcha.it('Should return first element of array and remove it', function () {
            var a = new Arroz(10, 20, 30)

            matcha.expect(a).toBeInstanceOf(Arroz)
            matcha.expect(!!a.shift).toBe(true)

            var shifted = a.shift()
            matcha.expect(shifted).toBe(10)
            matcha.expect(a.length).toBe(2)
            matcha.expect(a[0]).toBe(20)
            matcha.expect(a[1]).toBe(30)
        })
    })

    matcha.describe('> unshift', function () {
        matcha.it('Should add element in the first position of array and return the new length', function () {
            var a = new Arroz(10, 20, 30)

            matcha.expect(a).toBeInstanceOf(Arroz)
            matcha.expect(!!a.unshift).toBe(true)

            var length = a.unshift(0)
            var expect = new Arroz(0, 10, 20, 30)
            matcha.expect(length).toBe(4)
            for (var i = 0; i < a.length; i++) {
                matcha.expect(a[i]).toBe(expect[i])
            }
        })

        matcha.it('Should add more than one element in the first position of array and return the new length', function () {
            var a = new Arroz(10, 20, 30)

            matcha.expect(a).toBeInstanceOf(Arroz)
            matcha.expect(!!a.unshift).toBe(true)

            var length = a.unshift(0, 5)
            var expect = new Arroz(0, 5, 10, 20, 30)
            matcha.expect(length).toBe(5)
            for (var i = 0; i < a.length; i++) {
                matcha.expect(a[i]).toBe(expect[i])
            }
        })
    })

    matcha.describe('> with', function () {
        matcha.it('Should return a new array with a changed element in a said position', function () {
            var a = new Arroz('a', 'b', 'c', 'd')
            matcha.expect(a).toBeInstanceOf(Arroz)
            matcha.expect(!!a.with).toBe(true)

            var result = a.with(1, 'z')
            var expect = new Arroz('a', 'z', 'c', 'd')
            for (var i = 0; i < result.length; i++) {
                matcha.expect(result[i]).toBe(expect[i])
            }
        })

        matcha.it('Should return a new array with a changed element in a negative index', function () {
            var a = new Arroz('a', 'b', 'c', 'd')
            matcha.expect(a).toBeInstanceOf(Arroz)
            matcha.expect(!!a.with).toBe(true)

            var result = a.with(-2, 'z')
            var expect = new Arroz('a', 'b', 'z', 'd')
            for (var i = 0; i < result.length; i++) {
                matcha.expect(result[i]).toBe(expect[i])
            }
        })

        matcha.it('Should return an error if index is out of range', function () {
            var a = new Arroz('a', 'b', 'c', 'd')
            matcha.expect(a).toBeInstanceOf(Arroz)
            matcha.expect(!!a.with).toBe(true)


            var thrownError
            try {
                var result = a.with(7, 'z')
            } catch (error) {
                thrownError = error
            }
            matcha.expect(thrownError.name).toBe('RangeError')
            matcha.expect(thrownError.message).toBe('Invalid index : 7')
        })
    })
})