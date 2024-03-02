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

        matcha.it('should return value stored on position index, starting from the end when index is negative', function(){
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

    matcha.describe('> every', function(){
        matcha.it('should return every value bigger than 0 true', function(){
            var newArroz = new Arroz(1, 2, 3)

            matcha.expect(!!newArroz.every).toBe(true)

            var result = newArroz.every(function (x){
                return x > 0
            })

            matcha.expect(result).toBe(true)
        })

        matcha.it('should return false on some values < 0', function(){
            var newArroz = new Arroz(-1, 0, 1)

            var result = newArroz.every(function (x){
                return x > 0
            })

            matcha.expect(result).toBe(false)
        })

        matcha.it('should return true on Arroz empty', function(){
            var newArroz = new Arroz()

            var result = newArroz.every(function (x){
                return x > 100000
            })

            matcha.expect(result).toBe(true)
        })
    })

    matcha.describe('> filter', function(){
        matcha.it('should return Arroz with every matching element', function(){
            var newArroz = new Arroz(1, 2, 3)

            matcha.expect(!!newArroz.filter).toBe(true)

            var result = newArroz.filter(function (x){
                return x > 1
            })

            matcha.expect(result[0]).toBe(2)
            matcha.expect(result[1]).toBe(3)
            matcha.expect(result.length).toBe(2)
        })

        matcha.it('should return empty Arroz on no matches', function(){
            var newArroz = new Arroz(1, 2, 3)

            var result = newArroz.filter(function (x){
                return x > 5
            })

            matcha.expect(result.length).toBe(0)
        })
    })

    matcha.describe('> find', function(){
        matcha.it('should return first matching element', function(){
            var newArroz = new Arroz(1, 2, 3)

            matcha.expect(!!newArroz.find).toBe(true)

            var result = newArroz.find(function (x){
                return x > 1
            })

            matcha.expect(result).toBe(2)
        })

        matcha.it('should return undefined when no matching elements', function(){
            var newArroz = new Arroz(1, 2, 3)

            var result = newArroz.find(function (x){
                return x > 5
            })

            matcha.expect(result).toBe(undefined)
        })
    })

    matcha.describe('> findIndex', function(){
        matcha.it('should return index of first matching element', function(){
            var newArroz = new Arroz(1, 2, 3)

            matcha.expect(!!newArroz.findIndex).toBe(true)

            var result = newArroz.findIndex(function (x){
                return x > 1
            })

            matcha.expect(result).toBe(1)
        })

        matcha.it('should return -1 if no matches', function(){
            var newArroz = new Arroz(1, 2, 3)
            var result = newArroz.findIndex(function (x){
                return x > 5
            })

            matcha.expect(result).toBe(-1)
        })
    })

    matcha.describe('> forEach', function(){
        matcha.it('should execute callback on every element in Arroz', function(){
            var newArroz = new Arroz(1, 2, 3)
            var resultArroz = new Arroz()

            matcha.expect(!!newArroz.forEach).toBe(true)

            newArroz.forEach(function (x){
                resultArroz.push(x * 2)
            })

            matcha.expect(resultArroz.length).toBe(3)
            matcha.expect(resultArroz[0]).toBe(2)
            matcha.expect(resultArroz[1]).toBe(4)
            matcha.expect(resultArroz[2]).toBe(6)
        })
    })

    //Arroz.from WIP

    /*matcha.describe('> from', function(){
        matcha.it('should generate new Arroz from a string', function(){

            matcha.expect(!!Arroz.from).toBe(true)

            var result = new Arroz()

            matcha.expect(!!result.from).toBe(true)
            
            Arroz.from('Arroz')

            
            matcha.expect(result.length).toBe(5)
            matcha.expect(result[0]).toBe('A')
            matcha.expect(result[1]).toBe('r')
            matcha.expect(result[2]).toBe('r')
            matcha.expect(result[3]).toBe('o')
            matcha.expect(result[4]).toBe('z')
        })
    })*/

    matcha.describe('> includes', function(){
        matcha.it('returns true if a given value existing within Arroz', function(){
            var newArroz = new Arroz(1, 2, 3)

            matcha.expect(!!newArroz.includes).toBe(true)

            var result = newArroz.includes(2)
            matcha.expect(result).toBe(true)
        })

        matcha.it('should return false if no match', function(){
            var newArroz = new Arroz (1, 2, 3)
            var result = newArroz.includes(5)
            matcha.expect(result).toBe(false)
        })

        matcha.it('should start from index if given one', function(){
            var newArroz = new Arroz(1, 2, 3)
            var result = newArroz.includes(1, 1)
            matcha.expect(result).toBe(false)
        })
    })

    matcha.describe('> indexOf', function(){
        matcha.it('should return index of a given element', function(){
            var newArroz = new Arroz(1, 2, 3)
            
            matcha.expect(!!newArroz.indexOf).toBe(true)

            var result = newArroz.indexOf(2)
            matcha.expect(result).toBe(1)
        })

        matcha.it('should return -1 when no matches found', function(){
            var newArroz = new Arroz(1, 2, 3)
            var result = newArroz.indexOf(5)
            matcha.expect(result).toBe(-1)
        })

        matcha.it('should start from index when given a positive one', function(){
            var newArroz = new Arroz(1, 2, 3)
            var result = newArroz.indexOf(1, 1)
            matcha.expect(result).toBe(-1)
        })

        matcha.it('should start from end to index when index is negative', function(){
            var newArroz = new Arroz(1, 2, 3)

            var result = newArroz.indexOf(3, -2)
            matcha.expect(result).toBe(2)
            result = newArroz.indexOf(1, -2)
            matcha.expect(result).toBe(-1)
        })

        matcha.it('should return -1 when index out of range', function(){
            newArroz = new Arroz(1, 2, 3)

            var result = newArroz.indexOf(3, 3)
            matcha.expect(result).toBe(-1)
        })
    })

    matcha.describe('> join', function(){
        matcha.it('should return a string containing values within Arroz, separated by given separator', function(){
            let newArroz = new Arroz(1, 2, 3)

            matcha.expect(!!newArroz.join).toBe(true)

            var result = newArroz.join(' ')

            matcha.expect(result).toBe('1 2 3')
        })

        matcha.it('separator should be "," when no separator is provided', function(){
            let newArroz = new Arroz(1, 2, 3)
            var result = newArroz.join()
            matcha.expect(result).toBe('1,2,3')
        })

        matcha.it('nested Arroz should be flattened', function(){
            let newArroz1 = new Arroz(2, 3)
            let newArroz = new Arroz(1, newArroz1)
            var result = newArroz.join()
            matcha.expect(result).toBe('1,2,3')
        })
    })

    matcha.describe('> lastIndexOf', function(){
        matcha.it('should give the last matching value', function(){
            var newArroz = new Arroz('Bomba', 'Basmati', 'Basmati')

            matcha.expect(!!newArroz.lastIndexOf).toBe(true)

            let result = newArroz.lastIndexOf('Basmati')
            matcha.expect(result).toBe(2)
        })

        matcha.it('should return -1 when no matches', function(){
            var newArroz = new Arroz('Bomba', 'Basmati', 'Basmati')

            let result = newArroz.lastIndexOf('Jazmín')
            matcha.expect(result).toBe(-1)
        })

        matcha.it('should start from index to 0 when provided one', function(){
            var newArroz = new Arroz('Bomba', 'Basmati', 'Basmati')
            let result = newArroz.lastIndexOf('Basmati', 1)
            matcha.expect(result).toBe(1)
        })

        matcha.it('should start checking from Arroz.length + index when index is negative', function(){
            var newArroz = new Arroz('Bomba', 'Basmati', 'Basmati')
            let result = newArroz.lastIndexOf('Basmati', -1)
            matcha.expect(result).toBe(2)
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