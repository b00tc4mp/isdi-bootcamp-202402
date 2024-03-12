describe('Collection', function () {
    describe('constructor', function () {
        it('creates a collection', function () {
            var cars = new Collection('cars')
            expect(cars).toBeInstanceOf(Collection)
        })
    })

    describe('_generateId', function () {
        it('should generate random IDs', function () {
            var cars = new Collection('cars')
            var ran1 = cars._generateId()
            var ran2 = cars._generateId()

            expect(typeof ran1).toBe('string')
            expect(typeof ran2).toBe('string')
            expect(ran1 === ran2).toBe(false)
        })
    })

    describe('_loadDocuments', function () {
        it('should show empty array when localStorage has no values for the property', function () {
            delete localStorage.cars
            var cars = new Collection('cars')

            var info = cars._loadDocuments()

            expect(info).toBeInstanceOf(Object)
            expect(info.length).toBe(0)
        })

        it('should show array when localStorage has values for the property', function () {
            delete localStorage.cars
            var cars = new Collection('cars')
            var car1 = { brand: 'seat', model: 'ibiza' }

            cars._saveDocuments(car1)
            var info = cars._loadDocuments()

            expect(info).toBeInstanceOf(Array)
            expect(info.length).toBe(0)
        })
    })

    describe('_saveDocuments', function () {
        it('should save the sent element in an object', function () {
            delete localStorage.cars

            var cars = new Collection('cars')

            var car1 = [{ brand: 'seat', model: 'ibiza' }]
            cars._saveDocuments(car1)

            expect(cars).toBeInstanceOf(Array)
            expect(!!localStorage.cars).toBe(true)
            expect(typeof localStorage.cars).toBe('string')
            expect(localStorage.cars).toBe('{"brand":"seat","model":"ibiza"}')
        })
    })

    describe('findOne', function () {
        it('should find an element that is true with the callback', function () {
            delete localStorage.cars

            var cars = new Collection('cars')

            var car1 = { brand: 'seat', model: 'ibiza' }
            cars._saveDocuments(car1)
            var car2 = { brand: 'VW', model: 'golf' }
            cars._saveDocuments(car2)

            var result = cars.findOne(function (car) {
                return car.brand === 'VW'
            })

            expect(result).toBeInstanceOf(Object)
        })
    })
})