import Component from "./core/Component.mjs";
import logic from "../logic.mjs";
import utils from "../utils.mjs";

class UserList extends Component {
    constructor(users) {
        super('ul')

        try {
            const users = logic.retrieveUsers()

            users.forEach(user => {
                const userItem = new Component('li')
                userItem.setText(user.username)
                userItem.addClass('user-list__item')

                if (user.status === 'online')
                    userItem.addClass('user-list__item--online')
                else
                    userItem.addClass('user-list__item--offline')


                userItem.onClick(() => {
                    this._onUserClickCallback(user)
                })

                this.add(userItem)
            })

        } catch (error) {
            utils.showFeedback(error)
        }

        this._onUserClickCallback = null
    }

    onUserClick(callback) {
        if (typeof callback !== 'function') throw new TypeError('callback is not a function')

        this._onUserClickCallback = callback
    }
}

export default UserList