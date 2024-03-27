// COMPONENT

function Component(tagName) {
    this._container = document.createElement(tagName)
}

Component.prototype.setText = function (text) {
    this._container.innerText = text
}

Component.prototype.add = function () {
    var children = arguments

    // obtains the forEach function from the Array prototype and calls it upon each of the arguments(children)
    Array.prototype.forEach.call(children, function (child) {
        if (!(child instanceof Component)) throw new TypeError('child is not a Component')
    })

    Array.prototype.forEach.call(children, function (child) {
        this._container.appendChild(child._container)
    }.bind(this))
}


Component.prototype.assembleTo = function (parentElem) {
    if (!(parentElem instanceof HTMLElement)) throw new TypeError('parent element is not an HTML element')

    parentElem.appendChild(this._container)
}

Component.prototype.onClick = function (callback) {
    this._container.onclick = callback
}

Component.prototype.setId = function (id) {
    if (typeof id !== 'string') throw new TypeError('id is not a string')
    this._container.id = id
}