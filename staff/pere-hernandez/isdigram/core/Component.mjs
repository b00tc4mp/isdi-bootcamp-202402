class Component {
    constructor (tag) {
        this._container = document.createElement(tag)
    }

    assembleTo (element) {
        //validation

        if (!(element instanceof HTMLElement))
            throw new TypeError ('element is not an HTMLElement')

        //logic
        element.appendChild(this._container)
    }

    add () {
        //validation

        Array.prototype.forEach.call(arguments, function (child){

            if (!(child instanceof Component))
                throw new TypeError ('child is not a Component')
        })

        //logic
        Array.prototype.forEach.call(arguments, child => {
            this._container.appendChild(child._container)
        })
    }

    setText (text){
        //validation

        if (typeof text !== 'string')
            throw new TypeError('text is not a string')

        //logic
        this._container.innerText = text
    }

    setId (id) {
        //validation

        if (typeof id !== 'string')
            throw new TypeError ('id is not a string')

        //logic
        this._container.id = id
    }

    setClass(className) {
        //validation

        if (typeof className !== 'string')
            throw new TypeError ('className is not a name')

        //logoc
        this._container.classList.add(className)
    }

    onClick (callback) {
        //validation
        if (!(callback instanceof Function))
            throw new TypeError ('callback is not a function')

        //logic
        this._container.onclick = callback
    }

    removeAll(){
        this._container.innerHTML = ''
    }

    remove(child) {
        //validation

        if(!(child instanceof Component))
            throw new TypeError ('child is not a Component')

        //logic
        this._container.removeChild(child._container)
    }

    replace(oldChild, newChild){
        //validation

        if(!(oldChild instanceof Component))
            throw new TypeError ('oldChild is not a Component')
        if(!(newChild instanceof Component))
            throw new TypeError ('newChild is not a Component')

        //logic

        this._container.replaceChild(newChild._container, oldChild._container)
    }
}

export default Component