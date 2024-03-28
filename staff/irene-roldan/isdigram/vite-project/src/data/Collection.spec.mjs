import Collection from './Collection.mjs'
import fs from 'fs'
import{expect} from 'chai'

describe('Collection', () => {
    describe('constructor', () => {
        it('creates a collection', () => {
            const cars = new Collection('cars')

            expect(cars).to.be.instanceOf(Collection)
        })
    })

    describe('> helpers', () => {
        describe('_generateId', () => {
            it('generates a random id', () => {
                const cars = new Collection('cars')

                const id1 = cars._generateId()

                expect(typeof id1).to.equal('string')

                const id2 = cars._generateId()

                expect(typeof id2).to.equal('string')

                expect(id1 === id2).to.equal(false)
            })
        })

        describe('_loadDocuments', () => {
            it('loads empty array on new collection', function () {
                fs.writeFile('./data/cars.json', '[]', error => {
                    if(error){
                        console.error(error)

                        return
                    }
                })

                const cars = new Collection('cars')

                cars._loadDocuments((error, documents) => {
                    if(error) {
                        console.error(error)

                        return
                    }
                    
                    expect(documents).to.be.instanceOf(Array)
                    expect(documents.length).to.equal(0)

                    done() //en Mocha se usa para indicar que una prueba asíncrona ha acabado. 
                })
                    
                
            })

            it('loads data on non-empty collection', () => {
                fs.writeFile('./data/cars.json', '[{"brand":"porsche","model":"911"},{"brand":"fiat","model":"500"}]', error => {
                    if(error){
                        console.error(error)

                        return
                    }
                })
                expect(error).to.be.null
                
                expect(documents).to.be.instanceOf(Array)
                expect(documents.length).to.equal(2)

                let document = documents[0]
                expect(document).to.be.instanceOf(Object)
                expect(document.brand).to.equal('porsche')
                expect(document.model).to.equal('911')

                document = documents[1]
                expect(document.brand).to.equal('fiat')
                expect(document.model).to.equal('500')

                done()
            })
        })

        describe('_saveDocuments', () => {
            it('saves a collection', ()=> {
                fs.writeFile('./data(cars.json', '[]', error => {
                    if(error){
                        console.error(error)

                        return
                    }
                })

                const documents = [{ brand: 'porsche', model: '911' }, { brand: 'fiat', model: '500' }]

                const cars = new Collection('cars')

                cars._saveDocuments(documents, error => {
                    if(error) {
                        console.error(error)

                        return
                    }
                })

                expect(error).to.be.null

                expect(documentsJSON).to.equal(JSON.stringify(documents))

                done()
            })

            it('fails on non-array documents', () => {
                const documents = 'hola documents'

                const cars = new Collection('cars')

                let errorThrown

                try {
                    cars._saveDocuments(documents, () => { })
                } catch (error) {
                    errorThrown = error
                }

                expect(errorThrown).to.be.instanceOf(TypeError)
                expect(errorThrown.message).to.be('documents is not an array')
            })

            it('fails on array with non-object document in documents', () => {
                const documents = [{ brand: 'porsche', model: '911' }, { brand: 'fiat', model: '500' }, 'hola document']

                const cars = new Collection('cars')

                let errorThrown

                try {
                    cars._saveDocuments(documents)
                } catch (error) {
                    errorThrown = error
                }

                expect(errorThrown).to.be.instanceOf(TypeError)
                expect(errorThrown.message).to.equal('a document in documents is not an object')
            })
        })

        describe('_backup', () => {
            it('backs up the collection json', () => {
                delete localStorage['cars-backup']

                localStorage.cars = '[{"brand":"porsche","model":"911"},{"brand":"fiat","model":"500"}]'

                const cars = new Collection('cars')

                cars._backup()

                expect(localStorage['cars-backup']).toBe(localStorage.cars)
            })
        })

        describe('_restore', () => {
            it('restores the collection json', () => {
                delete localStorage['cars']

                localStorage['cars-backup'] = '[{"brand":"porsche","model":"911"},{"brand":"fiat","model":"500"}]'

                const cars = new Collection('cars')

                cars._restore()

                expect(localStorage.cars).toBe(localStorage['cars-backup'])
            })
        })
    })

    describe('> CRUD', () => {
        describe('findOne', () => {
            it('should find an existing document', done => {
                fs.writeFile('./data/cars.json', '[{"brand":"porsche","model":"911"},{"brand":"fiat","model":"500"}]', error => {
                    if(error){
                        console.error(error)

                        return
                    }
                })

                const cars = new Collection('cars')

                cars.findOne(car => car.brand === 'fiat', (error, car) => {
                    if(error){
                        console.error(error)

                        return
                    }
                })

                expect(car).to.be.instanceOf(Object)
                expect(car.brand).to.equal('fiat')
                expect(car.model).to.equal('500')

                done()
            })

            it('should fail on no callback', () => {
                const cars = new Collection('cars')

                let errorThrown

                try {
                    cars.findOne()
                } catch (error) {
                    errorThrown = error
                }

                expect(errorThrown).to.be.instanceOf(TypeError)
                expect(errorThrown.message).to.equal('callback is not a function')
            })

            it('should fail on non-function callback', () => {
                const cars = new Collection('cars')

                let errorThrown

                try {
                    cars.findOne(123)
                } catch (error) {
                    errorThrown = error
                }

                expect(errorThrown).to.be.instanceOf(TypeError)
                expect(errorThrown.message).to.equal('callback is not a function')
            })
        })

        describe('insertOne', () => {
            it('should insert an element with a generated ID', () => {
                const cars = new Collection('cars')
                const car = { brand: 'porsche', model: '911' }
                cars.insertOne(car)

                expect(car).to.be.instanceOf(Object)
                
            })
        })

        describe('upadateOne', () => {
            it('should update an existing document', () => {
                fs.writeFile('./data/cars.json', [{ "id": "1", "brand": "porsche", "model": "911" }, { "id": "2", "brand": "fiat", "model": "500" }], error => {
                    if(error){
                        console.error(error)
                        
                        return
                    }

                })

                const cars = new Collection('cars')

                const updatedCar = ({ "id": "1", "brand": "porsche", "model": "911 Turbo" },  { "id": "2", "brand": "fiat", "model": "500" })
                cars.updateOne(updatedCar)

                const updatedDocuments = JSON.parse(localStorage.cars)

                const updatedCarInStorage = updatedDocuments.find(doc => doc.id === updatedCar.id)

                expect(updatedCarInStorage).toBe(updatedCar)
        
            })
        })

        describe('deleteOne', () => {
            it('should delete an existing document', () =>{
                localStorage.cars = JSON.stringify([{ "id": "1", "brand": "porsche", "model": "911" }, { "id": "2", "brand": "fiat", "model": "500" }])

                const cars = new Collection('cars')

                const updatedCar = { "id": "1", "brand": "porsche", "model": "911 Turbo" }
                cars.deleteOne(updatedCar)

                const updatedDocuments = JSON.parse(localStorage.cars)
            })
        })

    })

    describe()
})