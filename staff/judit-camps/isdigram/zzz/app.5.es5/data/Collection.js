function Collection(name) {
    this.name = name
}

// helper
Collection.prototype._generateId = function () {
    return (+((parseInt(Math.random() * 10 ** 17)).toString())).toString(36)
}

Collection.prototype._loadDocuments = function () {
    var documentsJSON = localStorage[this.name]
    var documents = JSON.parse(documentsJSON || '[]')
    return documents
}

Collection.prototype._saveDocuments = function (documents) {
    if (!(documents instanceof Array)) throw new TypeError('documents is not an array')

    documents.forEach(function (document) {
        if (!(document instanceof Object)) throw new TypeError('a document in documents is not an array')
    })
    var documentsJSON = JSON.stringify(documents)
    localStorage[this.name] = documentsJSON
}

Collection.prototype._backup = function () {
    localStorage[this.name + '-backup'] = localStorage[this.name]
}

Collection.prototype._restore = function () {
    localStorage[this.name] = localStorage[this.name + '-backup']
}

// data
// CRUD
Collection.prototype.findOne = function (callback) {
    if (typeof callback !== 'function') throw new TypeError('callback is not a function')
    var documents = this._loadDocuments()
    var document = documents.find(callback)
    return document

}

Collection.prototype.insertOne = function (document) {
    if (typeof document !== 'object') throw new TypeError('document is not an object')
    var documents = this._loadDocuments()
    document.id = this._generateId()
    documents.push(document)
    this._saveDocuments(documents)
}

Collection.prototype.updateOne = function (document) {
    var documents = this._loadDocuments()

    var indexToUpdate = documents.findIndex(function (document2) {
        return document2.id === document.id
    })

    if (indexToUpdate > -1) {
        documents.splice(indexToUpdate, 1, document)
        this._saveDocuments(documents)
    }
}

Collection.prototype.deleteOne = function (callback) {
    var documents = this._loadDocuments()
    var indexToDelete = documents.findIndex(callback)

    if (indexToDelete > -1) {
        documents.splice(indexToDelete, 1)
        this._saveDocuments(documents)
    }
}

Collection.prototype.getAll = function () {
    var documents = this._loadDocuments()

    return documents
}

Collection.prototype.printAll = function () {
    var documents = this._loadDocuments()
    console.table(documents)
}
