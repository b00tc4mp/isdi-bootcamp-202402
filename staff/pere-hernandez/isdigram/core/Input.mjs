import Component from "./Component.mjs"

class Input extends Component {
    constructor() {
        super('input')
    }

    setType (type) {
        //validation

        if (typeof type !== 'string')

        //logic
        this._container.type = type
    }

    getValue() {
        return this._container.value
    }
}

export default Input