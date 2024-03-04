var matcha = require('./matcha')

var Arroz = require('./Arroz')

matcha.describe('Arroz', function () {
    matcha.describe('> constructor', function () {
        matcha.it('should construct', function () {
            var a = new Arroz
            matcha.expect(a instanceof Arroz).toBe(true)
            matcha.expect(a.length).toBe(0)
        })

        matcha.it('should construct with multiple values', function () {
            var a = new Arroz(10, 20, 30)

            matcha.expect(a instanceof Arroz).toBe(true)
            matcha.expect(a.length).toBe(3)
            matcha.expect(a[0]).toBe(10)
            matcha.expect(a[1]).toBe(20)
            matcha.expect(a[2]).toBe(30)
        })

        matcha.it('should construct with one non-numeric value', function () {
            var a = new Arroz(true)

            matcha.expect(a instanceof Arroz).toBe(true)
            matcha.expect(a.length).toBe(1)
            matcha.expect(a[0]).toBe(true)
        })

        matcha.it('should construct with one numeric value', function () {
            var a = new Arroz(5)

            matcha.expect(a instanceof Arroz).toBe(true)
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
    matcha.describe('> at', function () {
        matcha.it('should return the element in the arroz in the given index', function () {
            var a = new Arroz(20, 40, 60)
            matcha.expect(!!a.at).toBe(true)
            matcha.expect(a).toBeInstanceOf(Arroz);
            var value = a.at(1)
            matcha.expect(value).toBe(40);



        })
        matcha.it('should return element from negative index', function () {
            var a = new Arroz(20, 40, 60)
            matcha.expect(!!a.at).toBe(true)
            matcha.expect(a).toBeInstanceOf(Arroz);
            var value = a.at(-1)
            matcha.expect(value).toBe(60);

        })
        matcha.it('should return undefined if index is longer than length', function () {
            var a = new Arroz(20, 40, 60)
            matcha.expect(!!a.at).toBe(true)
            matcha.expect(a).toBeInstanceOf(Arroz);
            var value = a.at(-4)
            matcha.expect(value).toBe(undefined);
        })
        matcha.it('should return first element if index doesnt exist', function () {
            var a = new Arroz(20, 40, 60)
            matcha.expect(!!a.at).toBe(true)
            matcha.expect(a).toBeInstanceOf(Arroz);
            var value = a.at()
            matcha.expect(value).toBe(a[0]);

        })


    })
    matcha.describe('> concat', function () {
        matcha.it('should return mixed elements from 2 different elements', function () {
            var a = new Arroz(20, 40, 60);
            var b = new Arroz(30, 50, 70);
            matcha.expect(!!a.concat).toBe(true);
            matcha.expect(a).toBeInstanceOf(Arroz);
            var value = a.concat(13, b, undefined)
            matcha.expect(value.length).toBe(6)
            matcha.expect(value[0]).toBe(20);
            matcha.expect(value[1]).toBe(40);
            matcha.expect(value[2]).toBe(60);
            matcha.expect(value[3]).toBe(13);
            matcha.expect(value[4]).toBe(30);
            matcha.expect(value[5]).toBe(50);
            matcha.expect(value[6]).toBe(70);
            matcha.expect(value[7]).toBe(undefined);

        })
    })
    matcha.describe('> copyWithin', function () {
        matcha.it('should return the modified array copying to index 0 the element at index 3', function () {
            var a = new Arroz('a', 'b', 'c', 'd', 'e');
            matcha.expect(!!a.copyWithin).toBe(true);
            matcha.expect(a).toBeInstanceOf(Arroz);
            // a = a.copyWithin(0, 3, 4);
            // matcha.expect(a).toBe('d', 'b', 'c', 'd', 'e')
        })

    })
    matcha.describe('> entries', function () {
        matcha.it('should return a new object with key/valor of every element from the first object ', function () {
            // var a = new Arroz(a, b, c);
            // matcha.expect(!!a.entries).toBe(true);
            // matcha.expect(a).toBeInstanceOf(Arroz);
            // // var value = a.entries()
            // // matcha.expect(value).toBe(0, 'a')
        })

    })
    matcha.describe('> every', function () {
        matcha.it('should return a boolean depending the condition specified(true or false)', function () {
            var a = new Arroz(10, 20, 30, 35);
            matcha.expect(!!a.every).toBe(true);
            matcha.expect(a).toBeInstanceOf(Arroz);
            var callback = (currentValue) => currentValue < 40;
            var value = a.every(callback);
            matcha.expect(value).toBe(true)


        })
    })
    matcha.describe('> filter', function () {
        matcha.it('should return', function () {
            var a = new Arroz('spray', 'elite', 'exuberant', 'destruction', 'present');
            matcha.expect(!!a.filter).toBe(true);
            matcha.expect(a).toBeInstanceOf(Arroz);
            var callback = (word) => word.length > 6;
            var result = a.filter(callback);
            matcha.expect(result[0]).toBe('exuberant');
            matcha.expect(result[1]).toBe('destruction');
            matcha.expect(result[2]).toBe('present');
        })
    })
    matcha.describe('> with', function () {
        matcha.it('should return', function () {
            var a = new Arroz(1, 2, 3, 4, 5);
            matcha.expect(!!a.with).toBe(true);
            matcha.expect(a).toBeInstanceOf(Arroz);
            var result = a.with(2, 6);
            matcha.expect(a.length).toBe(5);
            matcha.expect(result[0]).toBe(1);
            matcha.expect(result[1]).toBe(2);
            matcha.expect(result[2]).toBe(6);
            matcha.expect(result[3]).toBe(4);
            matcha.expect(result[4]).toBe(5);
        })
        matcha.it('should return ojo error if index is longer or shorter than the length of the main Arroz', function () {
            // var a = new Arroz(1, 2, 3, 4, 5);
            // matcha.expect(!!a.with).toBe(true);
            // matcha.expect(a).toBeInstanceOf(Arroz);
            // var result = a.with(-80, 6);
            // matcha.expect(result).toBe('RangeError: ojo Error');

        })
    })
    matcha.describe('> map', function () {
        matcha.it('should return ', function () {
            var a = new Arroz(1, 2, 3, 4, 5);
            matcha.expect(!!a.map).toBe(true);
            matcha.expect(a).toBeInstanceOf(Arroz);
            var callback = function (x) { return x + 3 }
            var result = a.map(callback);
            matcha.expect(a.length).toBe(5);
            matcha.expect(result[0]).toBe(4);
            matcha.expect(result[1]).toBe(5);
            matcha.expect(result[2]).toBe(6);
            matcha.expect(result[3]).toBe(7);
            matcha.expect(result[4]).toBe(8);
        })
    })
    matcha.describe('> reduce', function () {
        matcha.it('should return a result of running the reducer across all elements of the array in a single value ', function () {
            var a = new Arroz(1, 2, 3, 4, 5);

            matcha.expect(!!a.reduce).toBe(true);
            matcha.expect(a).toBeInstanceOf(Arroz);

 

            var result = a.reduce(function (accumulator, currentValue) { return accumulator + currentValue }, 10);

            matcha.expect(a.length).toBe(1);

            matcha.expect(result).toBe(25);

        })
        matcha.it('should return a result of running the reducer across all elements of the array in a single value, this case starting with a initialValue')
    })
})
