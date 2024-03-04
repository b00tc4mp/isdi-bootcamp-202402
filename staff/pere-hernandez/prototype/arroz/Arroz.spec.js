var matcha = require('./matcha')
var Arroz = require('../arroz/Arroz')


matcha.describe('Arroz', function(){
    matcha.describe('> constructor', function(){
        matcha.it('should construct', function(){
            var testedArroz = new Arroz

            matcha.expect(testedArroz).toBeInstanceOf(Arroz)
            matcha.expect(testedArroz.length).toBe(0)
        })

        matcha.it('should construct with several parameters', function() {
            var testedArroz = new Arroz(1, 2, 3)

            matcha.expect(testedArroz).toBeInstanceOf(Arroz)
            matcha.expect(testedArroz.length).toBe(3)
            for (var i = 0; i < testedArroz.length; i++){
                matcha.expect(testedArroz[i]).toBe(i + 1)
            }
        })

        matcha.it('should construct with one non-Integer', function(){
            var testedArroz = new Arroz(2.7)

            matcha.expect(testedArroz).toBeInstanceOf(Arroz)
            matcha.expect(testedArroz.length).toBe(1)
            matcha.expect(testedArroz[0]).toBe(2.7)
        })

        matcha.it('should construct with Integer', function(){
            var testedArroz = new Arroz(2)

            matcha.expect(testedArroz).toBeInstanceOf(Arroz)
            matcha.expect(testedArroz.length).toBe(2)
            for (var i = 0; i < testedArroz.length; i++)
                matcha.expect(testedArroz[i]).toBe(undefined)
        })
    })


    matcha.describe('> at', function(){
        matcha.it('should return value stored on position index', function(){
            var testedArroz = new Arroz(1, 2, 3)

            matcha.expect(!!testedArroz.at).toBe(true)

            var value = testedArroz.at(1)
            matcha.expect(value).toBe(2)
            matcha.expect(testedArroz.length).toBe(3)
            for (var i = 0; i < testedArroz.length; i++){
                matcha.expect(testedArroz[i]).toBe(i + 1)
            }
        })

        matcha.it('should return value stored on position index, starting from the end when index is negative', function(){
            var testedArroz = new Arroz(1, 2, 3)

            var value = testedArroz.at(-1)
            matcha.expect(value).toBe(3)
            matcha.expect(testedArroz.length).toBe(3)
            for (var i = 0; i < testedArroz.length; i++){
                matcha.expect(testedArroz[i]).toBe(i + 1)
            }
        })

        matcha.it('should return undefined when index out of range', function(){
            var testedArroz = new Arroz(1, 2, 3)

            var value = testedArroz.at(4)
            matcha.expect(value).toBe(undefined)
            matcha.expect(testedArroz.length).toBe(3)
            for (var i = 0; i < testedArroz.length; i++){
                matcha.expect(testedArroz[i]).toBe(i + 1)
            }
            var value = testedArroz.at(-4)
            matcha.expect(value).toBe(undefined)
            matcha.expect(testedArroz.length).toBe(3)
            for (var i = 0; i < testedArroz.length; i++){
                matcha.expect(testedArroz[i]).toBe(i + 1)
            }
        })        
    })



    matcha.describe('> concat', function(){
        matcha.it('should return concatenated values on one Arroz', function(){
            var testedArroz = new Arroz(1, 2, 3)
            var testedArroz1 = new Arroz(4, 5, 6)

            matcha.expect(!!testedArroz.concat).toBe(true)

            var concatenated = testedArroz.concat(testedArroz1)
            matcha.expect(concatenated.length).toBe(6)
            for (var i = 0; i < concatenated.length; i++){
                matcha.expect(concatenated[i]).toBe(i + 1)
            }

            matcha.expect(testedArroz.length).toBe(3)
            for (var i = 0; i < testedArroz.length; i++){
                matcha.expect(testedArroz[i]).toBe(i + 1)
            }
            
            matcha.expect(testedArroz1.length).toBe(3)
            for (var i = 0; i < testedArroz1.length; i++){
                matcha.expect(testedArroz1[i]).toBe(i + 4)
            }
        })

        matcha.it('should return concatenated values when more than one Arroz', function(){
            var testedArroz = new Arroz(1, 2, 3)
            var testedArroz1 = new Arroz(4, 5, 6)
            var testedArroz2 = new Arroz(7, 8, 9)

            var concatenated = testedArroz.concat(testedArroz1, testedArroz2)
            matcha.expect(concatenated.length).toBe(9)
            for (var i = 0; i < concatenated.length; i++){
                matcha.expect(concatenated[i]).toBe(i + 1)
            }

            matcha.expect(testedArroz.length).toBe(3)
            for (var i = 0; i < testedArroz.length; i++){
                matcha.expect(testedArroz[i]).toBe(i + 1)
            }
            
            matcha.expect(testedArroz1.length).toBe(3)
            for (var i = 0; i < testedArroz1.length; i++){
                matcha.expect(testedArroz1[i]).toBe(i + 4)
            }

            matcha.expect(testedArroz2.length).toBe(3)
            for (var i = 0; i < testedArroz2.length; i++){
                matcha.expect(testedArroz2[i]).toBe(i + 7)
            }
        })

        matcha.it('should return concatenated values when some non-Arroz', function(){
            var testedArroz = new Arroz(1, 2, 3)
            var testedArroz1 = new Arroz(4, 5, 6)
            var num = 7

            var concatenated = testedArroz.concat(testedArroz1, num)
            matcha.expect(concatenated.length).toBe(7)
            for (var i = 0; i < concatenated.length; i++){
                matcha.expect(concatenated[i]).toBe(i + 1)
            }

            matcha.expect(testedArroz.length).toBe(3)
            for (var i = 0; i < testedArroz.length; i++){
                matcha.expect(testedArroz[i]).toBe(i + 1)
            }
            
            matcha.expect(testedArroz1.length).toBe(3)
            for (var i = 0; i < testedArroz1.length; i++){
                matcha.expect(testedArroz1[i]).toBe(i + 4)
            }

            matcha.expect(num).toBe(7)
        })
    })



    matcha.describe('> every', function(){
        matcha.it('should return true on every value bigger than 0', function(){
            var testedArroz = new Arroz(1, 2, 3)

            matcha.expect(!!testedArroz.every).toBe(true)

            var result = testedArroz.every(function (x){
                return x > 0
            })

            matcha.expect(result).toBe(true)
        })

        matcha.it('should return false on some values < 0', function(){
            var testedArroz = new Arroz(-1, 0, 1)

            var result = testedArroz.every(function (x){
                return x > 0
            })

            matcha.expect(result).toBe(false)
        })

        matcha.it('should return true on Arroz empty', function(){
            var testedArroz = new Arroz()

            var result = testedArroz.every(function (x){
                return x > 100000
            })

            matcha.expect(result).toBe(true)
        })
    })



    matcha.describe('> filter', function(){
        matcha.it('should return Arroz with every matching element', function(){
            var testedArroz = new Arroz(1, 2, 3)

            matcha.expect(!!testedArroz.filter).toBe(true)

            var result = testedArroz.filter(function (x){
                return x > 1
            })

            matcha.expect(result[0]).toBe(2)
            matcha.expect(result[1]).toBe(3)
            matcha.expect(result.length).toBe(2)
        })

        matcha.it('should return empty Arroz on no matches', function(){
            var testedArroz = new Arroz(1, 2, 3)

            var result = testedArroz.filter(function (x){
                return x > 5
            })

            matcha.expect(result.length).toBe(0)
        })
    })



    matcha.describe('> find', function(){
        matcha.it('should return first matching element', function(){
            var testedArroz = new Arroz(1, 2, 3)

            matcha.expect(!!testedArroz.find).toBe(true)

            var result = testedArroz.find(function (x){
                return x > 1
            })

            matcha.expect(result).toBe(2)
        })

        matcha.it('should return undefined when no matching elements', function(){
            var testedArroz = new Arroz(1, 2, 3)

            var result = testedArroz.find(function (x){
                return x > 5
            })

            matcha.expect(result).toBe(undefined)
        })
    })



    matcha.describe('> findIndex', function(){
        matcha.it('should return index of first matching element', function(){
            var testedArroz = new Arroz(1, 2, 3)

            matcha.expect(!!testedArroz.findIndex).toBe(true)

            var result = testedArroz.findIndex(function (x){
                return x > 1
            })

            matcha.expect(result).toBe(1)
        })

        matcha.it('should return -1 if no matches', function(){
            var testedArroz = new Arroz(1, 2, 3)
            var result = testedArroz.findIndex(function (x){
                return x > 5
            })

            matcha.expect(result).toBe(-1)
        })
    })



    matcha.describe('> forEach', function(){
        matcha.it('should execute callback on every element in Arroz', function(){
            var testedArroz = new Arroz(1, 2, 3)
            var resultArroz = new Arroz()

            matcha.expect(!!testedArroz.forEach).toBe(true)

            testedArroz.forEach(function (x){
                resultArroz.push(x * 2)
            })

            matcha.expect(resultArroz.length).toBe(3)
            for (let i = 0; i < resultArroz.length; i++){
                matcha.expect(resultArroz[i]).toBe((i + 1) * 2)
            }
        })
    })




    matcha.describe('> from', function(){
        matcha.it('should generate new Arroz from a string', function(){    
            var str = 'Arroz'        
            var result = Arroz.from(str)
            
            matcha.expect(result.length).toBe(5)
            for (var i = 0; i < result.length; i++){
                matcha.expect(result[i]).toBe(str[i])
            }
            matcha.expect(str).toBe('Arroz')
        })

        matcha.it('should return a new Arroz from Arroz', function(){
            var arroz = new Arroz(1, 2, 3)
            var result = Arroz.from(arroz)

            matcha.expect(result.length).toBe(3)
            for (var i = 0; i < result.length; i++){
                matcha.expect(result[i]).toBe(arroz[i])
            }

            matcha.expect(arroz.length).toBe(3)
            for (var i = 0; i < arroz.length; i++){
                matcha.expect(arroz[i]).toBe(i + 1)
            }
        })

        matcha.it('should apply callback to resulted array if provided', function(){
            var arroz = new Arroz (1, 2, 3)
            var result = Arroz.from(arroz, function (x){
                return x + x
            })

            matcha.expect(result.length).toBe(3)
            for (var i = 0; i < result.length; i++){
                matcha.expect(result[i]).toBe((i + 1) + (i + 1))
            }
            matcha.expect(arroz.length).toBe(3)
            for (var i = 0; i < arroz.length; i++){
                matcha.expect(arroz[i]).toBe(i + 1)
            }
        })        
    })



    matcha.describe('> includes', function(){
        matcha.it('returns true if a given value existing within Arroz', function(){
            var testedArroz = new Arroz(1, 2, 3)

            matcha.expect(!!testedArroz.includes).toBe(true)

            var result = testedArroz.includes(2)
            matcha.expect(result).toBe(true)
        })

        matcha.it('should return false if no match', function(){
            var testedArroz = new Arroz (1, 2, 3)
            var result = testedArroz.includes(5)
            matcha.expect(result).toBe(false)
        })

        matcha.it('should start from index if given one', function(){
            var testedArroz = new Arroz(1, 2, 3)
            var result = testedArroz.includes(1, 1)
            matcha.expect(result).toBe(false)
        })
    })



    matcha.describe('> indexOf', function(){
        matcha.it('should return index of a given element', function(){
            var testedArroz = new Arroz(1, 2, 3)
            
            matcha.expect(!!testedArroz.indexOf).toBe(true)

            var result = testedArroz.indexOf(2)
            matcha.expect(result).toBe(1)
        })

        matcha.it('should return -1 when no matches found', function(){
            var testedArroz = new Arroz(1, 2, 3)
            var result = testedArroz.indexOf(5)
            matcha.expect(result).toBe(-1)
        })

        matcha.it('should start from index when given a positive one', function(){
            var testedArroz = new Arroz(1, 2, 3)
            var result = testedArroz.indexOf(1, 1)
            matcha.expect(result).toBe(-1)
        })

        matcha.it('should start from end to index when index is negative', function(){
            var testedArroz = new Arroz(1, 2, 3)

            var result = testedArroz.indexOf(3, -2)
            matcha.expect(result).toBe(2)
            result = testedArroz.indexOf(1, -2)
            matcha.expect(result).toBe(-1)
        })

        matcha.it('should return -1 when index out of range', function(){
            testedArroz = new Arroz(1, 2, 3)

            var result = testedArroz.indexOf(3, 3)
            matcha.expect(result).toBe(-1)
        })
    })



    matcha.describe('> join', function(){
        matcha.it('should return a string containing values within Arroz, separated by given separator', function(){
            let testedArroz = new Arroz(1, 2, 3)

            matcha.expect(!!testedArroz.join).toBe(true)

            var result = testedArroz.join(' ')

            matcha.expect(result).toBe('1 2 3')
        })

        matcha.it('separator should be "," when no separator is provided', function(){
            let testedArroz = new Arroz(1, 2, 3)
            var result = testedArroz.join()
            matcha.expect(result).toBe('1,2,3')
        })

        matcha.it('nested Arroz should be flattened', function(){
            let testedArroz1 = new Arroz(2, 3)
            let testedArroz = new Arroz(1, testedArroz1)
            var result = testedArroz.join()
            matcha.expect(result).toBe('1,2,3')
        })
    })



    matcha.describe('> lastIndexOf', function(){
        matcha.it('should give the last matching value', function(){
            var testedArroz = new Arroz('Bomba', 'Basmati', 'Basmati')

            matcha.expect(!!testedArroz.lastIndexOf).toBe(true)

            let result = testedArroz.lastIndexOf('Basmati')
            matcha.expect(result).toBe(2)
        })

        matcha.it('should return -1 when no matches', function(){
            var testedArroz = new Arroz('Bomba', 'Basmati', 'Basmati')

            let result = testedArroz.lastIndexOf('Jazmín')
            matcha.expect(result).toBe(-1)
        })

        matcha.it('should start from index to 0 when provided one', function(){
            var testedArroz = new Arroz('Bomba', 'Basmati', 'Basmati')
            let result = testedArroz.lastIndexOf('Basmati', 1)
            matcha.expect(result).toBe(1)
        })

        matcha.it('should start checking from Arroz.length + index when index is negative', function(){
            var testedArroz = new Arroz('Bomba', 'Basmati', 'Basmati')
            let result = testedArroz.lastIndexOf('Basmati', -1)
            matcha.expect(result).toBe(2)
        })
    })



    matcha.describe('> map', function(){
        matcha.it('should return a new Arroz with all the elements of the original Arroz modified by the callback', function(){
            var testedArroz = new Arroz(1, 2, 3)

            matcha.expect(!!testedArroz.map).toBe(true)

            result = testedArroz.map(function (x){
                return x + 5
            })

            matcha.expect(result.length).toBe(3)
            for (let i = 0; i < result.length; i++){
                matcha.expect(result[i]).toBe(i + 6)
            }

            matcha.expect(testedArroz.length).toBe(3)
            for (let i = 0; i < testedArroz.length; i++){
                matcha.expect(testedArroz[i]).toBe(i + 1)
            }

        })
    })    



    matcha.describe('> popped', function(){
        matcha.it('should extract last value', function(){
            var testedArroz = new Arroz(1, 2, 3)

            matcha.expect(!!testedArroz.pop).toBe(true)

            var popped = testedArroz.pop()

            matcha.expect(popped).toBe(3)
            matcha.expect(testedArroz.length).toBe(2)
            matcha.expect(testedArroz[0]).toBe(1)
            for (var i = 0; i < testedArroz.length; i++){
                matcha.expect(testedArroz[i]).toBe(i + 1)
            }
        })
    })


    
    matcha.describe('> push', function(){
        matcha.it('should push a value', function(){
            var testedArroz = new Arroz(1, 2, 3)

            matcha.expect(!!testedArroz.push).toBe(true)

            var length = testedArroz.push(4)
            matcha.expect(testedArroz.length).toBe(4)
            for (var i = 0; i < testedArroz.length; i++){
                matcha.expect(testedArroz[i]).toBe(i + 1)
            }
            matcha.expect(length).toBe(4)            
        })

        matcha.it('should push many values', function(){
            var testedArroz = new Arroz(1, 2, 3)

            var length = testedArroz.push(4, 5)
            matcha.expect(testedArroz.length).toBe(5)
            for (var i = 0; i < testedArroz.length; i++){
                matcha.expect(testedArroz[i]).toBe(i + 1)
            }            
            matcha.expect(length).toBe(5)
        })
    })



    matcha.describe('> reduce', function(){
        matcha.it('should execute a callback on Arroz and return it reduced to one single value', function(){
            var testedArroz = new Arroz (1, 2, 3)
            
            matcha.expect(!!testedArroz.reduce).toBe(true)

            var result = testedArroz.reduce(function (x, y){
                return x + y
            })

            matcha.expect(result).toBe(6)
            matcha.expect(testedArroz.length).toBe(3)
            for (let i = 0; i < testedArroz.length; i++){
                matcha.expect(testedArroz[i]).toBe(i + 1)
            }
        })

        matcha.it('should also work when provided a value upon which we start reducing', function(){
            var testedArroz = new Arroz(1, 2, 3)

            var result = testedArroz.reduce(function (x, y){
                return x + y
            }, 10)

            matcha.expect(result).toBe(16)
            matcha.expect(testedArroz.length).toBe(3)
            for (let i = 0; i < testedArroz.length; i++){
                matcha.expect(testedArroz[i]).toBe(i + 1)
            }
        })
    })



    matcha.describe('> toString', function(){
        matcha.it('should convert to string', function(){
            var testedArroz = new Arroz(1, 2, 3)

            matcha.expect(!!testedArroz.toString).toBe(true)
            
            var str = testedArroz.toString()
            matcha.expect(str).toBe('Arroz [1, 2, 3]')

            matcha.expect(testedArroz.length).toBe(3)
            for (let i = 0; i < testedArroz.length; i++){
                matcha.expect(testedArroz[i]).toBe(i + 1)
            }
        })
    })
    


    matcha.describe('> shift', function(){
        matcha.it('should remove the first element of an Arroz and return it', function(){
            var testedArroz = new Arroz(1, 2, 3)

            matcha.expect(!!testedArroz.shift).toBe(true)

            var result = testedArroz.shift()

            matcha.expect(result).toBe(1)
            matcha.expect(testedArroz.length).toBe(2)
            for (var i = 0; i < testedArroz.length; i++){
                matcha.expect(testedArroz[i]).toBe(i + 2)
            }
        })

        matcha.it('should return undefined if applied on empty Arroz', function(){
            var testedArroz = new Arroz()
            var result = testedArroz.shift()

            matcha.expect(result).toBe(undefined)
            matcha.expect(testedArroz.length).toBe(0)
        })
    })



    matcha.describe('> slice', function(){
        matcha.it('should extract a new Arroz starting from indexStart and finishing in indexEnd', function(){
            var testedArroz = new Arroz (1, 2, 3, 4, 5)

            matcha.expect(!!testedArroz.slice).toBe(true)

            var result = testedArroz.slice(1, 3)

            matcha.expect(result.length).toBe(3)
            matcha.expect(testedArroz.length).toBe(2)
            for (var i = 0; i < result.length; i++){
                matcha.expect(result[i]).toBe(i + 2)
            }
            matcha.expect(testedArroz[0]).toBe(1)
            matcha.expect(testedArroz[1]).toBe(5)
        })
    })
})