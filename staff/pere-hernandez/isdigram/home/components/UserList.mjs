import Component from "../../core/Component.mjs"

import logic from "../../logic.mjs"

class UserList extends Component {
    constructor() {
        super('ul')

        try {
            const users = logic.retrieveUsers()

            users.forEach(user => {
                const userLi = new Component ('li')
                userLi.setText(user.username)

                if (user.status === 'online')
                    userLi.setClass('user-list-online')
                else
                    userLi.setClass('user-list-offline')

                userLi.onClick(() => this._onUserClickCallback(user))

                this.add(userLi)
            })
        } catch (error) {
            alert(error.message)
        }

        this._onUserClickCallback = null
    }

    onUserClick(callback) {
        //validation

        if (typeof callback !== 'function')
            throw new TypeError('callback is not a Function')

        //logic

        this._onUserClickCallback = callback
    }
}

export default UserList