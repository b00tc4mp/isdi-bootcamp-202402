function Image(){
    Component.call(this, 'img')
}

Image.prototype = Object.create(Component.prototype)
Image.prototype.constructor = Image

Image.prototype.setSource = function (source) {
    //validation

    if (typeof source !== 'string')
        throw new TypeError ('source is not a string')

    //logic
    this._container.src = source
}