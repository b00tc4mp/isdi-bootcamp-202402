import logic from "../logic.mjs"

import { Component } from "react"
import Menu from "../components/Menu"
import CreatePost from "../components/CreatePost"
import PostList from "../components/PostList"

class Home extends Component {
    constructor(){
        super()

        try{
            const user = logic.retrieveUser()

            this.user = user
        } catch (error) {
            alert(error.message)
        }
        
        this.state = {view: null, stamp: null}
    }

    changeOverflowClass(){
        this.setState({overflow: !this.state.overflow})
    }

    render(){
        return <main id="home-main" className="home-main-scroll">
            <header>
                <div id="logo">
                    <img src="../../logo.png" id="logo-img"></img>

                    <h5 id="logo-title">Isdigram.</h5>
                </div>

                <button id="logout" onClick={() => {
                    try {
                        logic.logoutUser()
                    } catch (error) {
                        alert(error.message)
                    }

                    this.props.onLogout()
                }}>Logout</button>
            </header>

            <h1 id="greeting">Hello, {this.user.username}</h1>

            <Menu /> 

            <footer>
                <button id="new-post-button" className="transparent-button" onClick={() => {
                    this.setState({view: 'post-form'})
                }}>
                    <img id="new-post-button-img" src="../../circulo-plus.png"></img>
                </button>
            </footer>            
            
            <PostList refreshStamp={this.state.stamp}
            onDelete={() => {
                this.setState({stamp: Date.now()})
            }}/>           

            {this.state.view === 'post-form' && <CreatePost onCancelNewPostClick={() => {
                this.setState({view: null})
                
            }}
            onNewPost={() => {
                this.setState({view: null, stamp: Date.now()})
            }}
            />}
        </main>
    }
        /*
        const menu = new Menu
        const chat = new Chat

        this.add(menu)

        menu.onChatClick(() => {
            PostList.active = false

            this.remove(postList)
            this.remove(footer)

            Chat.active = true

            this.add(chat)
        })

        menu.onHomeClick(() => {
            Chat.active = false
            PostList.active = true
            
            this.remove(chat)

            this.add(postList, footer)
        })
    }
    */
}

export default Home