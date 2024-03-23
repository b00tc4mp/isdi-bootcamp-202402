import utils from "../utils.mjs";

import logic from "../logic.mjs";

import Component from "../components/core/Component.mjs";
import Header from "../components/Header.mjs";
import Footer from "../components/Footer.mjs";
import PostsLists from "../components/PostList.mjs";
import Chat from "../components/Chat.mjs";
import Button from "../components/core/Button.mjs";
import CreatePost from '../components/CreatePost.mjs'
import UserPage from "../components/UserPage.mjs";


class Home extends Component {
    constructor() {
        super('main')

        this.addClass('main')

        const header = new Header
        header.addClass('header')

        const chatPage = new Chat
        header.onChatClick(() => {
            this.remove(footer)
            this.remove(posts)
            this.add(chatPage)
        })
        this.add(header)

        header.onTitleClick(() => {
            this.remove(chatPage)
            this.add(footer)
            this.add(posts)
        })


        try {
            const user = logic.getUser()

            const pageTitle = new Component('h1')
            pageTitle.setText('Hello, ' + user.name + '!')

            this.add(pageTitle)

        } catch (error) {
            utils.showFeedback(error)
        }
        const posts = new PostsLists

        this.add(posts)


        const footer = new Footer
        footer.addClass('footer')

        footer.onCreateNewPostClick(() => {
            const newPostForm = new CreatePost
            newPostForm.addClass('new-post-form')


            newPostForm.onCancelClick(() => {
                this.remove(newPostForm)
                console.count('cancel post')
            })

            newPostForm.onPostCreated(() => {
                this.remove(newPostForm)
                posts.refresh()
            })

            this.add(newPostForm)
        })
        let userPage
        footer.onUserButtonClick(() => {

            userPage = new UserPage

            userPage.onLogoutClick(() => {
                this._onLogoutClickCallback()
            })

            this.replace(posts, userPage)

        })

        footer.onHomeButtonClick(() => {
            this.remove(userPage)
            this.add(posts)

            posts.refresh()
        })

        this.add(footer)

    }
    onLogoutClick(callback) {
        if (typeof callback !== 'function') throw new TypeError('callback is not a function')

        this._onLogoutClickCallback = callback
    }
}

export default Home