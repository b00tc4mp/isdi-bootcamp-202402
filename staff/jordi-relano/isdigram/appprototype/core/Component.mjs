class Component {
    // si en el constructor dejas el tagName tal cual, y entra un undefined (si pones el = 'div'), se hará eso por defecto
    constructor(tagName = 'div') {
        this._container = document.createElement(tagName)
        // el parametro que pasamos por aqui pasa al valor apra crearse commo elemento HTML y se referencia como this._container ( que es home)
        // const home = new Component('main')
        // home._container ( para que sea interno de Component)
        // el abuelo Component hereda a home, que es un elemento HTML ( su valor se instancia como createElement)
    }

    setText(text) {
        this._container.innerText = text
    }

    add() {
        const children = arguments

        Array.prototype.forEach.call(children, (child) => {
            if (!(child instanceof Component)) throw new TypeError('child is not a Component')
        })

        Array.prototype.forEach.call(children, (child) => {
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

    assembleTo(element) {
        if (!(element instanceof HTMLElement)) throw new TypeError('element is not an HTMLElement')

        element.appendChild(this._container) // agregamos el elemtno hijo al contenedor padre
    }

    onClick(callback) {
        this._container.onclick = callback
    }

    setId(id) {
        if (typeof id !== 'string') throw new TypeError('id is not a string')

        this._container.id = id
    }
    addClass(classname) {
        if (typeof classname !== 'string') throw new TypeError('class is not a string')
        this._container.classList.add(classname)

    }
}

export default Component
