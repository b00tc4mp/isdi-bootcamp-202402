import Component from "../../core/Component.mjs";

class UserList extends Component {
    constructor(users) {
        super('ul')

        users.forEach(user => {
            const userItem = new Component('li')
            userItem.setText(user.username)

            if (user.status === 'online')
                userItem.addClass('user-list__item--online')
            else
                userItem.addClass('user-list__item--ofline')

            this.add(userItem)

            userItem.onClick(() => {

            })
        })
    }
}

export default UserList