import utils from "../utils.mjs"
import logic from "../logic.mjs"

import Component from "../core/Component.mjs"
import Button from "../core/Button.mjs"
import Posts from "./components/PostList.mjs"
import CreatePost from "./components/CreatePost.mjs"
import Footer from "./components/Footer.mjs"
import Chat from "./components/Chat.mjs"
import Header from "./components/Header.mjs"

if (!logic.isUserLoggedIn())
    location.href = '../login'

else {
    // HEADER
    const header = new Header
    header.assembleTo(document.body)



    const headerTitle = header._title
    headerTitle.onClick(() => {
        home.removeAll()
        try {
            const user = logic.getUser()

            const title = new Component('h1')
            title.setText('Hello, ' + user.name + '!')

            home.add(title)

        } catch (error) {
            utils.showFeedback(error)
        }
        home.add(posts)
        footer.reset()
    })

    const chatButton = header._chatButton
    // HOME
    const home = new Component('main')
    home.assembleTo(document.body)

    try {
        const user = logic.getUser()

        const title = new Component('h1')
        title.setText('Hello, ' + user.name + '!')

        home.add(title)

    } catch (error) {
        utils.showFeedback(error)
    }

    const footer = new Footer
    const homeButton = footer._homeButton
    const newPostButton = footer._newPostButton

    const chat = new Chat
    chatButton.onClick(() => {
        home.remove(posts)
        footer.removeAll()
        home.add(chat)
    })

    homeButton.onClick(() => {
        home.remove(chat)
        home.add(posts)
        posts.refresh()
    })


    const posts = new Posts

    home.add(posts)



    // FOOTER

    footer.onCreateNewPostClick(() => {
        const newPostForm = new CreatePost
        newPostForm.setId('new-post-form')


        newPostForm.onCancelClick(() => {
            home.remove(newPostForm)
        })

        newPostForm.onPostCreated(() => {
            home.remove(newPostForm)
            posts.refresh()
        })

        home.add(newPostForm)
    })

    const userPage = new Component('div')
    footer.onUserButtonClick(() => {
        home.remove(posts)

        const logOutButton = new Button
        logOutButton.setText('log out')

        logOutButton.onClick(() => {
            logic.logoutUser()

            location.href = '../login'
        })

        const changePasswordButton = new Button
        changePasswordButton.setText('change password')

        userPage.add(changePasswordButton, logOutButton)
        home.add(userPage)
    })

    footer.onHomeButtonClick(() => {
        home.remove(userPage)
        home.add(posts)

        posts.refresh()
    })

    footer.assembleTo(document.body)
}

