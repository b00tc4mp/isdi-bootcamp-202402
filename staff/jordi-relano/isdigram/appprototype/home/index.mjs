import utils from '../utils.mjs'

import logic from '../logic.mjs'

import Component from '../core/Component.mjs'
import Menu from './components/Menu.mjs'
import Posts from './components/Posts.mjs'
import Footer from './components/Footer.mjs'
import CreatePost from './components/Createpost.mjs'
import Chat from './components/Chat.mjs'

if (!logic.isUserLoggedIn())
    location.href = '../login'

else {

    const home = new Component('main');

    // creamos un elemento html y le damos clase, después lo metemos al body dle documento html

    home.addClass('main');

    home.assembleTo(document.body);

    try {
        const user = logic.retrieveUser()

        const title = new Component('h1')
        title.setText('Hello, ' + user.name + '!')

        // creamos un titulo instancia de componente, y le seteamos lo que queramos (username)

        home.add(title)

        // lo agregamos al home
    } catch (error) {
        utils.showFeedback(error)
    }


    const menu = new Menu

    const chat = new Chat

    home.add(menu)

    const posts = new Posts

    home.add(posts)



    menu.onChatClick(() => {
        home.remove(posts);
        home.remove(footer);

        home.add(chat)
    })

    menu.onHomeClick(() => {
        home.remove(chat);

        home.add(posts);

        home.add(footer)
    })

    const footer = new Footer

    footer.onCreatePostClick(() => {
        const createPost = new CreatePost

        createPost.onCancelClick(() =>
            home.remove(createPost))

        createPost.onPostCreated(() => {
            home.remove(createPost)
            posts.refresh()

        })
        home.add(createPost)

    })

    home.add(footer)




}
