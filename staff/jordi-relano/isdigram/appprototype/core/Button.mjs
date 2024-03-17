import component from './Component.mjs'

class Button extends component {
    constructor() {
        super('button')
    }



    setType = function (type) {
        if (typeof type !== 'string') throw new TypeError('type is not a string')

        this._container.for = type
    }
}

export default Button
