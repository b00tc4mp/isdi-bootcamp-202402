var matcha = require('./matcha')
var Arroz = require('./Arroz')


matcha.describe('Arroz', function(){
    matcha.describe('> constructor', function(){
        matcha.it('should construct', function(){
            var newArroz = new Arroz

            matcha.expect(newArroz).toBeInstanceOf(Arroz)
            matcha.expect(newArroz.length).toBe(0)
        })

        matcha.it('should construct with several parameters', function() {
            var newArroz = new Arroz(1, 2, 3)

            matcha.expect(newArroz).toBeInstanceOf(Arroz)
            matcha.expect(newArroz.length).toBe(3)
            matcha.expect(newArroz[0]).toBe(1)
            matcha.expect(newArroz[1]).toBe(2)
            matcha.expect(newArroz[2]).toBe(3)
        })

        matcha.it('should construct with one non-Integer', function(){
            var newArroz = new Arroz(2.7)

            matcha.expect(newArroz).toBeInstanceOf(Arroz)
            matcha.expect(newArroz.length).toBe(1)
            matcha.expect(newArroz[0]).toBe(2.7)
        })

        matcha.it('should construct with Integer', function(){
            var newArroz = new Arroz(2)

            matcha.expect(newArroz).toBeInstanceOf(Arroz)
            matcha.expect(newArroz.length).toBe(2)
            for (var i = 0; i < newArroz.length; i++)
                matcha.expect(newArroz[i]).toBe(undefined)
        })
    })

    
    matcha.describe('> push', function(){
        matcha.it('should push a value', function(){
            var newArroz = new Arroz(1, 2, 3)

            matcha.expect(!!newArroz.push).toBe(true)

            var length = newArroz.push(4)
            matcha.expect(newArroz.length).toBe(4)            
            matcha.expect(newArroz[0]).toBe(1)
            matcha.expect(newArroz[1]).toBe(2)
            matcha.expect(newArroz[2]).toBe(3)
            matcha.expect(newArroz[3]).toBe(4)
            matcha.expect(length).toBe(4)            
        })

        matcha.it('should push many values', function(){
            var newArroz = new Arroz(1, 2, 3)

            var length = newArroz.push(4, 5)
            matcha.expect(newArroz.length).toBe(5)            
            matcha.expect(newArroz[0]).toBe(1)
            matcha.expect(newArroz[1]).toBe(2)
            matcha.expect(newArroz[2]).toBe(3)
            matcha.expect(newArroz[3]).toBe(4)
            matcha.expect(newArroz[4]).toBe(5)
            matcha.expect(length).toBe(5)
        })
    })


    matcha.describe('> popped', function(){
        matcha.it('should extract last value', function(){
            var newArroz = new Arroz(1, 2, 3)

            matcha.expect(!!newArroz.pop).toBe(true)

            var popped = newArroz.pop()

            matcha.expect(popped).toBe(3)
            matcha.expect(newArroz[0]).toBe(1)
            matcha.expect(newArroz[1]).toBe(2)
        })
    })


    matcha.describe('> at', function(){
        matcha.it('should return value stored on position index', function(){
            var newArroz = new Arroz(1, 2, 3)

            matcha.expect(!!newArroz.at).toBe(true)

            var value = newArroz.at(1)
            matcha.expect(value).toBe(2)
        })

        matcha.it('should return value stored on position index, starting from the start when index is negative', function(){
            var newArroz = new Arroz(1, 2, 3)

            var value = newArroz.at(-1)
            matcha.expect(value).toBe(3)
        })

        matcha.it('should return undefined when index out of range', function(){
            var newArroz = new Arroz(1, 2, 3)

            var value = newArroz.at(4)
            matcha.expect(value).toBe(undefined)
            var value = newArroz.at(-4)
            matcha.expect(value).toBe(undefined)
        })        
    })



    matcha.describe('> concat', function(){
        matcha.it('should return concatenated values on one Arroz', function(){
            var newArroz = new Arroz(1, 2, 3)
            var newArroz1 = new Arroz(4, 5, 6)

            matcha.expect(!!newArroz.concat).toBe(true)

            var concatenated = newArroz.concat(newArroz1)
            matcha.expect(concatenated[0]).toBe(1)
            matcha.expect(concatenated[1]).toBe(2)
            matcha.expect(concatenated[2]).toBe(3)
            matcha.expect(concatenated[3]).toBe(4)
            matcha.expect(concatenated[4]).toBe(5)
            matcha.expect(concatenated[5]).toBe(6)
        })

        matcha.it('should return concatenated values when more than one Arroz', function(){
            var newArroz = new Arroz(1, 2, 3)
            var newArroz1 = new Arroz(4, 5, 6)
            var newArroz2 = new Arroz(7, 8, 9)

            var concatenated = newArroz.concat(newArroz1, newArroz2)
            matcha.expect(concatenated[0]).toBe(1)
            matcha.expect(concatenated[1]).toBe(2)
            matcha.expect(concatenated[2]).toBe(3)
            matcha.expect(concatenated[3]).toBe(4)
            matcha.expect(concatenated[4]).toBe(5)
            matcha.expect(concatenated[5]).toBe(6)
            matcha.expect(concatenated[6]).toBe(7)
            matcha.expect(concatenated[7]).toBe(8)
            matcha.expect(concatenated[8]).toBe(9)
        })

        matcha.it('should return concatenated values when some non-Arroz', function(){
            var newArroz = new Arroz(1, 2, 3)
            var newArroz1 = new Arroz(4, 5, 6)
            var num = 7

            var concatenated = newArroz.concat(newArroz1, num)
            matcha.expect(concatenated[0]).toBe(1)
            matcha.expect(concatenated[1]).toBe(2)
            matcha.expect(concatenated[2]).toBe(3)
            matcha.expect(concatenated[3]).toBe(4)
            matcha.expect(concatenated[4]).toBe(5)
            matcha.expect(concatenated[5]).toBe(6)
            matcha.expect(concatenated[6]).toBe(7)
        })
    })


    matcha.describe('> toString', function(){
        matcha.it('should convert to string', function(){
            var newArroz = new Arroz(1, 2, 3)

            matcha.expect(!!newArroz.toString).toBe(true)
            
            var str = newArroz.toString()
            matcha.expect(str).toBe('Arroz [1, 2, 3]')
        })
    })
})
