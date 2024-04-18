import Component from '../components/core/Component.mjs'

import Link from '../components/core/Link.mjs'

class Landing extends Component {
    constructor() {
        super('main')

        this.addClass('landing')

        const title = new Component('h1')
        title.setText('App')
        title.addClass('landing-title')

        const loginLink = new Link
        loginLink.setText('login')
        loginLink.setHref('')

        loginLink.addClass('landing-link')

        loginLink.onClick((event) => {
            event.preventDefault()

            this._onLoginClickCallback()
        })


        const registerLink = new Link
        registerLink.setText('register')
        registerLink.setHref('')
        registerLink.addClass('landing-link')

        registerLink.onClick((event) => {
            event.preventDefault()

            this._onRegisterClickCallback()
        })

        this.add(title, loginLink, registerLink)

        this._onLoginClickCallback = null
        this._onRegisterClickCallback = null
    }


    onLoginClick(callback) {
        if (typeof callback !== 'function') throw new TypeError('callback is not a function')

        this._onLoginClickCallback = callback
    }

    onRegisterClick(callback) {
        if (typeof callback !== 'function') throw new TypeError('callback is not a function')

        this._onRegisterClickCallback = callback
    }
}

export default Landing