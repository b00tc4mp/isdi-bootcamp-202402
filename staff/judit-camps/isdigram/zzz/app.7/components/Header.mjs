import Button from "./core/Button.mjs";
import Component from "./core/Component.mjs";


class Header extends Component {
    constructor() {
        super('header')

        const title = new Component('h3')
        title.setText('Isdigram')

        this._title = title

        const chatButton = new Button
        chatButton.setText('chat')

        this._chatButton = chatButton

        this.add(title, chatButton)
    }

    onChatClick(callback) {
        if (typeof callback !== 'function') throw new TypeError('callback is not a function')

        this._chatButton.onClick(() => {
            this.remove(chatButton)

            callback()
        })
    }

    onTitleClick(callback) {
        if (typeof callback !== 'function') throw new TypeError('callback is not a function')

        this._title.onClick(() => {
            callback()
        })
    }
}

export default Header