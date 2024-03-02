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
})