var matcha = require('./matcha')

var Arroz = require('./arroz')

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
        matcha.it('should return the element in the arroz in the given index', function () {
            var a = new Arroz(20, 40, 60)

            matcha.expect(!!a.at).toBe(true)
            matcha.expect(a).toBeInstanceOf(Arroz)
            var value = a.at(1)

            matcha.expect(value).toBe(40)
        })
    })

    matcha.describe('> at', function () {
        matcha.it('should return the element in the arroz in the given index', function () {
            var a = new Arroz(20, 40, 60)

            matcha.expect(!!a.at).toBe(true)
            matcha.expect(a).toBeInstanceOf(Arroz)
            var value = a.at(1)

            matcha.expect(value).toBe(40)
        })
        matcha.it('should return element from negative index', function () {
            var a = new Arroz(20, 40, 60)

            matcha.expect(!!a.at).toBe(true)
            matcha.expect(a).toBeInstanceOf(Arroz)
            var value = a.at(-1)

            matcha.expect(value).toBe(60)
        })
     

        matcha.it('should return undefined if index is longer than length', function () {
            var a = new Arroz(20, 40, 60)

            matcha.expect(!!a.at).toBe(true)
            matcha.expect(a).toBeInstanceOf(Arroz)
            var value = a.at(-4)

            matcha.expect(value).toBe(undefined)
        })
        
        matcha.it('should return first element if index dosent exist', function () {
            var a = new Arroz(20, 40, 60)

            matcha.expect(!!a.at).toBe(true)
            matcha.expect(a).toBeInstanceOf(Arroz)
            var value = a.at()

            matcha.expect(value).toBe(a[0])
        })


    }) 

    matcha.describe('> concat', function () {
        matcha.it('should return mixed elements from 2 differents elements', function () {
            var bomba = new Arroz(20, 40, 60)
            var basmati = new Arroz(80, 100, 120)

            matcha.expect(!!bomba.concat).toBe(true)
            matcha.expect(bomba).toBeInstanceOf(Arroz)
            
            matcha.expect(basmati).toBeInstanceOf(Arroz)
            
            var value = bomba.concat(basmati)

            matcha.expect(value.length).toBe(6)
            matcha.expect(value[0]).toBe(bomba[0])
            matcha.expect(value[1]).toBe(bomba[1])
            matcha.expect(value[2]).toBe(bomba[2])
            matcha.expect(value[3]).toBe(basmati[0])
            matcha.expect(value[4]).toBe(basmati[1])
            matcha.expect(value[5]).toBe(basmati[2])
        })

    })

    matcha.describe('> concat', function () {
        matcha.it('should return mixed elements from differents elements from diferents types', function () {
            var bomba = new Arroz(20, 40, 60)
            var basmati = new Arroz(80, 100, 120)

            matcha.expect(!!bomba.concat).toBe(true)
            matcha.expect(bomba).toBeInstanceOf(Arroz)
            
            matcha.expect(basmati).toBeInstanceOf(Arroz)
            
            var value = bomba.concat(basmati, 13, 'hola')

            matcha.expect(value.length).toBe(8)
            matcha.expect(value[0]).toBe(bomba[0])
            matcha.expect(value[1]).toBe(bomba[1])
            matcha.expect(value[2]).toBe(bomba[2])
            matcha.expect(value[3]).toBe(basmati[0])
            matcha.expect(value[4]).toBe(basmati[1])
            matcha.expect(value[5]).toBe(basmati[2])
            matcha.expect(value[6]).toBe(13)
            matcha.expect(value[7]).toBe('hola')
        })

    })


    matcha.describe('> find', function () {
        matcha.it('should return first element when callback is true', function () {
            var jasmin = new Arroz(20, 40, 60, 80, 100)

            matcha.expect(!!jasmin.find).toBe(true)
            matcha.expect(jasmin).toBeInstanceOf(Arroz)

            var value = jasmin.find(function (element) {return element > 40})

            matcha.expect(value).toBe(60)
            
        })

        matcha.it('should return undefind', function (){
            var jasmin = new Arroz(20, 40, 60, 80, 100)

            matcha.expect(!!jasmin.find).toBe(true)
            matcha.expect(jasmin).toBeInstanceOf(Arroz)

            var value = jasmin.find(function (element) {return element > 120})

            matcha.expect(value).toBe(undefined)
        })
    
    })

    matcha.describe('> forEach', function () {
        matcha.it('should iterate on each element', function () {
            var integral = new Arroz(10, 20, 30, 40, 50, 60)
            var delDelta = new Arroz

            integral.forEach(function (element, index, arroz) {
                delDelta[index] = { item: element, iterable: arroz }
                delDelta.length++
            })

            matcha.expect(integral.length).toBe(6)

            for (var i = 0; i < integral.length; i++)
                matcha.expect(integral[i]).toBe(10 * (i + 1))

            matcha.expect(delDelta.length).toBe(integral.length)

            for (var i = 0; i < delDelta.length; i++) {
                var element = delDelta[i]

                matcha.expect(element.item).toBe((10 * (i + 1)))
                matcha.expect(element.iterable).toBe(integral)
            }
        })
    })

    matcha.describe('> includes', function (){
        matcha.it('should return true if it finds an element', function() {
            var savage = new Arroz(10, 20, 30)
            
            matcha.expect(!!savage.includes).toBe(true)
            matcha.expect(savage).toBeInstanceOf(Arroz)

            var value = savage.includes(function (element) {return element < 10})

            matcha.expect(value).toBe(true)

            matcha.expect(savage[0]).toBe(10)
            matcha.expect(savage[1]).toBe(20)
            matcha.expect(savage[2]).toBe(30)
        })

        matcha.it('should return true if it finds an element (false)', function() {
            var savage = new Arroz(10, 20, 30)
            
            matcha.expect(!!savage.includes).toBe(true)
            matcha.expect(savage).toBeInstanceOf(Arroz)

            var value = savage.includes(function (element) {return element < 80})

            matcha.expect(value).toBe(false)

            
            matcha.expect(savage[0]).toBe(10)
            matcha.expect(savage[1]).toBe(20)
            matcha.expect(savage[2]).toBe(30)
        })

    })

    
    matcha.describe('> map', function (){
        matcha.it('should return a new values *10, return a new Arroz *10', function(){
            var bomba = new Arroz (10, 20 ,30)

            matcha.expect(!!bomba.map).toBe(true)
            matcha.expect(bomba).toBeInstanceOf(Arroz)

            var value = bomba.map(function (element) {return element *10})

            matcha.expect(value).toBeInstanceOf(Arroz)
            matcha.expect(value.length).toBe(3)
            matcha.expect(value[0]).toBe(100)
            matcha.expect(value[1]).toBe(200)
            matcha.expect(value[2]).toBe(300)
        })

        matcha.it('should return toUpperCase', function(){
            var bomba = new Arroz ('a', 'b', 'c')

            matcha.expect(!!bomba.map).toBe(true)
            matcha.expect(bomba).toBeInstanceOf(Arroz)

            var value = bomba.map(function (element) {return element.toUpperCase()})

            matcha.expect(value).toBeInstanceOf(Arroz)
            matcha.expect(value.length).toBe(3)
            matcha.expect(value[0]).toBe('A')
            matcha.expect(value[1]).toBe('B')
            matcha.expect(value[2]).toBe('C')
        })
    })

    matcha.describe('> find', function () {
        matcha.it('should find a product in cart', function () {
            var cart = new Arroz({ brand: 'adidas', model: 'cool socks', price: 16 }, { brand: 'nike', model: 'air max', price: 120 }, { brand: 'puma', model: 'dangerous glasses', price: 30 })

            var i = 0

            var item = cart.find(function (element, index, arroz) {
                matcha.expect(index).toBe(i++)
                matcha.expect(arroz).toBe(cart)

                return element.price === 120
            })

            matcha.expect(item.brand).toBe('nike')
            matcha.expect(item.model).toBe('air max')
            matcha.expect(item.price).toBe(120)
        })

        matcha.it('should not find a product that is not in cart', function () {
            var cart = new Arroz({ brand: 'adidas', model: 'cool socks', price: 16 }, { brand: 'nike', model: 'air max', price: 120 }, { brand: 'puma', model: 'dangerous glasses', price: 30 })

            var i = 0

            var item = cart.find(function (element, index, arroz) {
                matcha.expect(index).toBe(i++)
                matcha.expect(arroz).toBe(cart)

                return element.price === 500
            })

            matcha.expect(item).toBe(undefined)
        })
    })

    
