class Component {
    constructor(tagNameOrContainer = 'div') {
        if (tagNameOrContainer instanceof HTMLElement)
            this._container = tagNameOrContainer
        else
            this._container = document.createElement(tagNameOrContainer)
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

    replace(oldChild, newChild) {
        if (!(oldChild instanceof Component)) throw new TypeError('oldChild is not a Component')
        if (!(newChild instanceof Component)) throw new TypeError('newChild is not a Component')

        this._container.replaceChild(newChild._container, oldChild._container)
    }

    remove(child) {
        if (!(child instanceof Component)) throw new TypeError('child is not a Component')

        this._container.removeChild(child._container)
    }

    removeAll() {
        this._container.innerHTML = ''
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

    addClass(className) {
        this._container.classList.add(className)
    }
}

export default Component