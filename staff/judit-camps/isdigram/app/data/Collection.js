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
    var documentsJSON = JSON.stringify(documents)
    localStorage[this.name] = documentsJSON
}

// data
// CRUD
Collection.prototype.findOne = function (callback) {
    var documents = this._loadDocuments()
    var document = documents.find(callback)
    return document

}

Collection.prototype.insertOne = function (document) {
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
