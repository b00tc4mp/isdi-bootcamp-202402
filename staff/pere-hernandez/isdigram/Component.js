function Component(tag){
    this._container = document.createElement(tag)
}

Component.prototype.assembleTo = function (element) {
    //validation

    if (!(element instanceof HTMLElement))
        throw new TypeError ('element is not an HTMLElement')

    //logic
    element.appendChild(this._container)
}

Component.prototype.add = function () {
    //validation

    Array.prototype.forEach.call(arguments, function (child){

        if (!(child instanceof Component))
            throw new TypeError ('child is not a Component')
    })

    //logic
    Array.prototype.forEach.call(arguments, function (child){
        this._container.appendChild(child._container)
    }.bind(this))
}

Component.prototype.setText = function (text){
    //validation

    if (typeof text !== 'string')
        throw new TypeError('text is not a string')

    //logic
    this._container.innerText = text
}

Component.prototype.setId = function (id) {
    //validation

    if (typeof id !== 'string')
        throw new TypeError ('id is not a string')

    //logic
    this._container.id = id
}

Component.prototype.onClick = function (callback) {
    //validation
    if (!(callback instanceof Function))
        throw new TypeError ('callback is not a function')

    //logic
    this._container.onclick = callback
}