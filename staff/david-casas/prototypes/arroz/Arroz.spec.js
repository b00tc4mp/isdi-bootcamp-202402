var matcha = require('./matcha')

var Arroz = require('./Arroz')

matcha.describe('Arroz', function () {
    matcha.describe('> constructor', function () {
        matcha.it('should construct', function () 
        {
            var a = new Arroz

            matcha.expect(a).toBeInstanceOf(Arroz)
            matcha.expect(a.length).toBe(0)
        })

        matcha.it('should construct with multiple values', function () {
            var a = new Arroz(10, 20, 30)

            matcha.expect(a).toBeInstanceOf(Arroz)
            matcha.expect(a.length).toBe (3)
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
            for(var i = 0; i < a.length; i++)
            matcha.expect(a[i]).toBe(undefined)
        })
    })    
        matcha.describe('> push', function () {
            matcha.it('should push a value', function () {
                var a = new Arroz(10, 20, 30)

                matcha.expect(!!a.push). toBe(true)

                var length= a.push(40)

                matcha.expect(a.length).toBe(4)
                matcha.expect(a[a.length - 1]).toBe (40)
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

        matcha.describe('>pop', function () {
            matcha.it('should extract last value', function () {
                var a = new Arroz(10, 20, 30)

                matcha.expect(!!a.pop).toBe(true)

                var value = a.pop()

                matcha.expect(a.length).toBe(2)
                matcha.expect(a[0]).toBe (10)
                matcha.expect(a[1]).toBe (20)
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
        /*//no funciona
        matcha.describe ('>some', function () {
            matcha.it ('should return true if element is in the array', function() {
                  
          var a = new Arroz(10, 20, 30)
        
          matcha.expect(!!a.some).toBe(true)

          var value = a.some()
          
          matcha.expect(a.length).toBe(3)
          matcha.expect(a[0]).toBe(10)
          matcha.expect(a[1]).toBe(20)
          matcha.expect(a[2]).toBe(30)
          matcha.expect(value).toBe( )
        })

    })
*/
    matcha.describe('> at', function () {
        matcha.it('should return position of array(positive index', function () {
            var a = new Arroz(10, 20, 30, 40)

            matcha.expect(!!a.at).toBe(true)

            var atValue = a.at(2)
            matcha.expect(atValue).toBe(30)

            matcha.expect(a[0]).toBe(10)
            matcha.expect(a[1]).toBe(20)
            matcha.expect(a[2]).toBe(30)
            matcha.expect(a[3]).toBe(40)
            matcha.expect(a[4]).toBe(undefined)

        })

        matcha.it('should return position of Arroz(negative index', function () {

            var a = new Arroz(10, 20, 30, 40)
            var negValue = a.at(-2)

            matcha.expect(negValue).toBe(30)

            matcha.expect(a[0]).toBe(10)
            matcha.expect(a[1]).toBe(20)
            matcha.expect(a[2]).toBe(30)
            matcha.expect(a[3]).toBe(40)
            matcha.expect(a[4]).toBe(undefined)
        })

        matcha.it('should return position of Arroz (OOR index)', function () {

            var a = new Arroz(10, 20, 30, 40)
            var negValue = a.at(-70)

            matcha.expect(a[0]).toBe(10)
            matcha.expect(a[1]).toBe(20)
            matcha.expect(a[2]).toBe(30)
            matcha.expect(a[3]).toBe(40)
            matcha.expect(a[4]).toBe(undefined)
        })
    }) 
    
    matcha.describe('>concat', function () {
        matcha.it('should return concatenation of single value(string/number)', function () {
            var a = new Arroz(10, 20, 30)
            matcha.expect(!! a.concat).toBe(true)

            a.concat('40')

            matcha.expect(a[0]).toBe(10)
            matcha.expect(a[1]).toBe(20)
            matcha.expect(a[2]).toBe(30)
            matcha.expect(a[3]).toBe('40')
            matcha.expect(a[4]).toBe(undefined)

            var a = new Arroz(10, 20, 30)

            a.concat(40)

            matcha.expect(a[0]).toBe(10)
            matcha.expect(a[1]).toBe(20)
            matcha.expect(a[2]).toBe(30)
            matcha.expect(a[3]).toBe(40)
            matcha.expect(a[4]).toBe(undefined)
        })

        matcha.it('should return concatenation of arrays', function () {

            var a = new Arroz(10, 20, 30)
            a.concat([40, 50])

            matcha.expect(a[0]).toBe(10)
            matcha.expect(a[1]).toBe(20)
            matcha.expect(a[2]).toBe(30)
            matcha.expect(a[3]).toBe(40)
            matcha.expect(a[4]).toBe(50)

        })
    })
    matcha.describe('> every', function () {
        matcha.it('should return true if all elements meet condition HAPPY', function () {
            var a = new Arroz(10, 20, 30)
            matcha.expect(!!a.every).toBe(true)

            var result = a.every(function (x) {
                return x < 40
            })
            matcha.expect(result).toBe(true)

            matcha.expect(a[0]).toBe(10)
            matcha.expect(a[1]).toBe(20)
            matcha.expect(a[2]).toBe(30)
        })

        matcha.it('should return true if all elemensts meet condition UNHAPPY', function () {
            var a = new Arroz(10, 20, 30)

            var result = a.every(function (x) {
                return x < 20
            })

            matcha.expect(result).toBe(true)

            matcha.expect(a[0]).toBe(10)
            matcha.expect(a[1]).toBe(20)
            matcha.expect(a[2]).toBe(30)
        })
        matcha.it('should return true if all elements meet condition UNHAPPY', function () {
            var a = new Arroz(10, 20, 30)

            var result = a.every(function (x) {
                return x < 20
            })

            matcha.expect(result).toBe(false)

            matcha.expect(a[0]).toBe(10)
            matcha.expect(a[1]).toBe(20)
            matcha.expect(a[2]).toBe(30)
        })
    })
})
