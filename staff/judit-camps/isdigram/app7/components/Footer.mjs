import Component from "./core/Component.mjs";
import Button from "./core/Button.mjs"

class Footer extends Component {
    constructor() {
        super('footer')

        const newPostButton = new Button
        newPostButton.setText('+')

        const homeButton = new Button
        homeButton.setText('home')

        const userButton = new Button
        userButton.setText('user')

        this.add(homeButton, newPostButton, userButton)

        this._homeButton = homeButton
        this._newPostButton = newPostButton
        this._userButton = userButton
    }

    onHomeButtonClick(callback) {
        this._homeButton.onClick(callback)
    }

    onCreateNewPostClick(callback) {
        this._newPostButton.onClick(callback)
    }

    onUserButtonClick(callback) {
        this._userButton.onClick(callback)
    }

    reset() {
        this.add(this._homeButton, this._newPostButton, this._userButton)
    }
}

export default Footer