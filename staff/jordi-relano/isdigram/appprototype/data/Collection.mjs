class Collection {
    constructor(name) {
        this.name = name
    }

    // helpers

    _generateId = function () {
        return (+((parseInt(Math.random() * 10 ** 17)).toString())).toString(36)
    }

    _loadDocuments = function () {
        const documentsJSON = localStorage[this.name]

        const documents = JSON.parse(documentsJSON || '[]')

        return documents
    }

    _saveDocuments = function (documents) {
        if (!(documents instanceof Array)) throw new TypeError('documents is not an array')

        documents.forEach(function (document) {
            if (!(document instanceof Object)) throw new TypeError('a document in documents is not an object')
        })

        const documentsJSON = JSON.stringify(documents)

        localStorage[this.name] = documentsJSON
    }

    _backup = function () {
        localStorage[this.name + '-backup'] = localStorage[this.name]
    }

    _restore = function () {
        localStorage[this.name] = localStorage[this.name + '-backup']
    }

    // CRUD

    findOne = function (callback) {
        if (typeof callback !== 'function') throw new TypeError('callback is not a function')

        const documents = this._loadDocuments()

        const document = documents.find(callback)

        return document
    }

    insertOne = function (document) {
        if (typeof document !== 'object') throw new TypeError('document is not an object')
        const documents = this._loadDocuments()

        document.id = this._generateId()

        documents.push(document)

        this._saveDocuments(documents)
    }

    updateOne = function (document) {
        const documents = this._loadDocuments()

        const index = documents.findIndex(function (document2) {
            return document2.id === document.id
        })

        if (index > - 1) {
            documents.splice(index, 1, document)

            this._saveDocuments(documents)
        }
    }

    deleteOne = function (callback) {
        const documents = this._loadDocuments()

        const index = documents.findIndex(callback)

        if (index > - 1) {
            documents.splice(index, 1)

            this._saveDocuments(documents)
        }
    }

    getAll = function () {
        const documents = this._loadDocuments()

        return documents
    }

    print = function () {
        const document = this._loadDocuments()

        console.table(document)
    }
}

export default Collection