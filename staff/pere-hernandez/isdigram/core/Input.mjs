import Component from ".Component"

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
}

export default Input