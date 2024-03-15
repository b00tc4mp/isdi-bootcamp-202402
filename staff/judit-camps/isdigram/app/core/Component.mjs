class Component {
    constructor(tagName) {
        this._container = document.createElement(tagName)
    }
    setText(text) {
        this._container.innerText = text
    }

    add() {
        const children = arguments

        // obtains the forEach function from the Array prototype and calls it upon each of the arguments(children)
        Array.prototype.forEach.call(children, child => {
            if (!(child instanceof Component)) throw new TypeError('child is not a Component')
        })

        Array.prototype.forEach.call(children, child => {
            this._container.appendChild(child._container)
        })
    }


    assembleTo(parentElem) {
        if (!(parentElem instanceof HTMLElement)) throw new TypeError('parent element is not an HTML element')

        parentElem.appendChild(this._container)
    }

    onClick(callback) {
        this._container.onclick = callback
    }

    setId(id) {
        if (typeof id !== 'string') throw new TypeError('id is not a string')
        this._container.id = id
    }
}

export default Component