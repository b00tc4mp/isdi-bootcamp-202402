describe('Collection', function () {
    describe('>constructor', function () {
        it('creates a collection', function () {
            delete localStorage.cars
            var cars = new Collection('cars')
            expect(cars).toBeInstanceOf(Collection)
        })
    })

    describe('>helpers', function () {
        describe('_generateId', function () {
            it('should generate random IDs', function () {
                delete localStorage.cars
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
                localStorage.cars = '[{"brand":"seat","model":"ibiza"},{"brand":"VW","model":"golf"}]'

                var cars = new Collection('cars')
                var documents = cars._loadDocuments()

                expect(documents).toBeInstanceOf(Array)
                expect(documents.length).toBe(2)
            })
        })

        describe('_saveDocuments', function () {
            it('should save the sent element in an object', function () {
                delete localStorage.cars

                var documents = [{ brand: "seat", model: "ibiza" }, { brand: "VW", model: "golf" }]

                var documentsJSON = '[{"brand":"seat","model":"ibiza"},{"brand":"VW","model":"golf"}]'

                var cars = new Collection('cars')

                cars._saveDocuments(documents)

                expect(typeof localStorage.cars).toBe('string')
                expect(localStorage.cars).toBe(documentsJSON)
            })

            it('should fail in non-array documents', function () {
                delete localStorage.cars

                var documents = 'hello'

                var cars = new Collection('cars')

                var errorThrown
                try {
                    cars._saveDocuments(documents)
                } catch (error) {
                    errorThrown = error
                }

                expect(errorThrown).toBeInstanceOf(TypeError)
                expect(errorThrown.message).toBe('documents is not an array')
            })

            it('should fail on array with non-object document', function () {
                delete localStorage.cars

                var documents = [{ brand: "seat", model: "ibiza" }, { brand: "VW", model: "golf" }, 'hello']

                var cars = new Collection('cars')

                var errorThrown
                try {
                    cars._saveDocuments(documents)
                } catch (error) {
                    errorThrown = error
                }

                expect(errorThrown).toBeInstanceOf(TypeError)
                expect(errorThrown.message).toBe('a document in documents is not an array')
            })
        })

    })

    describe('>CRUD', function () {
        describe('findOne', function () {
            it('should find an element that is true with the callback', function () {
                localStorage.cars = '[{"brand":"seat","model":"ibiza"},{"brand":"VW","model":"golf"}]'

                var cars = new Collection('cars')

                var result = cars.findOne(function (car) {
                    return car.brand === 'VW'
                })

                expect(result).toBeInstanceOf(Object)
                expect(result.brand).toBe('VW')
                expect(result.model).toBe('golf')
            })

            it('should fail on no callback', function () {
                var cars = new Collection('cars')

                var errorThrown
                try {
                    cars.findOne()
                } catch (error) {
                    errorThrown = error
                }

                expect(errorThrown).toBeInstanceOf(TypeError)
                expect(errorThrown.message).toBe('callback is not a function')

            })

            it('should fail on non-function callback', function () {
                var cars = new Collection('cars')

                var errorThrown
                try {
                    cars.findOne(123)
                } catch (error) {
                    errorThrown = error
                }

                expect(errorThrown).toBeInstanceOf(TypeError)
                expect(errorThrown.message).toBe('callback is not a function')
            })
        })

        describe('insertOne', function () {
            it('should add new document empty array', function () {
                delete localStorage.cars

                var document = { brand: "seat", model: "ibiza" }

                var cars = new Collection('cars')

                cars.insertOne(document)

                var parsed = JSON.parse(localStorage.cars)

                expect(typeof localStorage.cars).toBe('string')
                expect(parsed.length).toBe(1)
                expect(typeof parsed[0].id).toBe('string')

            })

            it('should add new document existing array', function () {
                var cars = new Collection('cars')
                var newDocument = { brand: "VW", model: "golf" }

                cars.insertOne(newDocument)

                var parsed = JSON.parse(localStorage.cars)

                expect(typeof localStorage.cars).toBe('string')
                expect(parsed.length).toBe(2)
                expect(typeof parsed[1].id).toBe('string')
                expect(parsed[0].id === parsed[1].id).toBe(false)
            })

            it('should fail on empty document', function () {
                delete localStorage.cars

                var cars = new Collection('cars')

                var errorThrown
                try {
                    cars.insertOne()
                } catch (error) {
                    errorThrown = error
                }
                expect(errorThrown).toBeInstanceOf(TypeError)
                expect(errorThrown.message).toBe('document is not an object')
            })

            it('should fail on non-object document', function () {
                delete localStorage.cars

                var cars = new Collection('cars')

                var errorThrown
                try {
                    cars.insertOne(111)
                } catch (error) {
                    errorThrown = error
                }
                expect(errorThrown).toBeInstanceOf(TypeError)
                expect(errorThrown.message).toBe('document is not an object')
            })
        })

        describe('updateOne', function () {
            it('should update one document', function () {

            })

            it('should fail on empty document', function () {

            })

            it('should fail on non-object document', function () {

            })
        })

        describe('deleteOne', function () {
            it('should delete one document from array', function () {

            })

            it('should fail on empty callback', function () {

            })

            it('should fail on non-function callback', function () {

            })

        })

        describe('getAll', function () {
            it('should return empty array if localStorage is empty for value', function () {

            })

            it('should return array if localStorage is non-empty', function () {

            })
        })

        describe('printAll', function () {

        })
    })
})
