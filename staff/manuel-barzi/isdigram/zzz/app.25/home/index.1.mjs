import utils from '../utils.mjs'

import logic from '../logic.mjs'

import Component from '../core/Component.mjs'
import Menu from './components/Menu.mjs'
import Posts from './components/Posts.mjs'
import Footer from './components/Footer.mjs'
import CreatePost from './components/CreatePost.mjs'
import Chat from './components/Chat.mjs'

if (!logic.isUserLoggedIn())
    location.href = '../login'
else {
    const home = new Component('main')

    home.addClass('main')

    home.assembleTo(document.body)

    try {
        const user = logic.retrieveUser()

        const title = new Component('h1')
        title.setText('Hello, ' + user.name + '!')

        home.add(title)
    } catch (error) {
        utils.showFeedback(error)
    }

    const menu = new Menu

    const chat = new Chat

    menu.onChatClick(() => {
        home.remove(posts)
        home.remove(footer)

        home.add(chat)
    })

    menu.onHomeClick(() => {
        home.remove(chat)

        home.add(posts)
        home.add(footer)
    })

    home.add(menu)

    const posts = new Posts

    home.add(posts)

    const footer = new Footer

    let createPost = null

    footer.onCreatePostClick(() => {
        if (!createPost) {
            createPost = new CreatePost

            createPost.onCancelClick(() => {
                home.remove(createPost)

                createPost = null
            })

            createPost.onPostCreated(() => {
                home.remove(createPost)

                createPost = null

                posts.refresh()
            })

            home.add(createPost)
        }
    })

    home.add(footer)
}