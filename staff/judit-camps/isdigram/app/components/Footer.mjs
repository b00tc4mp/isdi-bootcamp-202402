import Component from "./core/Component.mjs";
import Button from "./core/Button.mjs"

class Footer extends Component {
    constructor() {
        super('footer')

        this.addClass('footer')

        const homeButton = new Button
        homeButton.setText('home')

        const newPostButton = new Button
        newPostButton.setText('+')

        const userButton = new Button
        userButton.setText('user')

        this.add(homeButton, newPostButton, userButton)

        this._homeButton = homeButton
        this._newPostButton = newPostButton
        this._userButton = userButton
    }

    onHomeButtonClick(callback) {
        if (typeof callback !== 'function') throw new TypeError('callback is not a function')

        this._homeButton.onClick(callback)
    }

    onCreateNewPostClick(callback) {
        if (typeof callback !== 'function') throw new TypeError('callback is not a function')

        this._newPostButton.onClick(callback)
    }

    onUserButtonClick(callback) {
        if (typeof callback !== 'function') throw new TypeError('callback is not a function')

        this._userButton.onClick(callback)
    }

    reset() {
        this.add(this._homeButton, this._newPostButton, this._userButton)
    }
}

export default Footer