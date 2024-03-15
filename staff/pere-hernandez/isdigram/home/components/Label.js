function Label () {
    Component.call(this, 'label')
}

Label.prototype = Object.create(Component.prototype)
Label.prototype.constructor = Label

Label.prototype.setFor = function (forId) {
    //validation

    if (typeof forId !== 'string')
        throw new TypeError ('forId is not a string')

    this._container.for = forId
}