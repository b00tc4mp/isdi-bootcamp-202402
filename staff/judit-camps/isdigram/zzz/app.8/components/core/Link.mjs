import Component from "./Component.mjs";

class Link extends Component {
    constructor() {
        super('a')
    }

    setHref(link) {
        this._container.href = link
    }
}

export default Link