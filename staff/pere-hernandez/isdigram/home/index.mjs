

import Component from "../core/Component.mjs"
import logic from "../logic.mjs"
import Header from "./components/Header.mjs"
import Menu from "./components/Menu.mjs"
import Posts from "./components/Posts.mjs"
import Footer from "./components/Footer.mjs"
import CreatePost from "./components/CreatePost.mjs"
import Chat from "./components/Chat.mjs"

if (!logic.checkLoggedInStatus()){
    location.href = '../login'
} else {
    const home = new Component('main')
    home.setClass('main')

    home.assembleTo(document.body)

    const header = new Header

    home.add(header)

    const greeting = new Component('h2')
    try{
        const user = logic.retrieveUser()

        greeting.setText('Hello, '+ user.username + '!')   
    } catch (error) {
        alert(error.message)
    }

    greeting.setId('greeting')

    home.add(greeting)
    

    const menu = new Menu
    menu.setId('menu')

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
    posts.setId('post-list-section')

    home.add(posts)

    const footer = new Footer

    footer.onCreatePostClick(() => {
        if(!CreatePost.active){
            const createPost = new CreatePost

            createPost.onReturnClick(() => {
                home.remove(createPost)
            })

            createPost.onPostCreated(() => {
                home.remove(createPost) 
            })

            home.add(createPost)
        }
    })
    home.add(footer)
}