import utils from '../utils.mjs'
import logic from '../logic.mjs'
import { Component } from "react"

import PostList from './components/PostList'
import CreatePost from './components/CreatePost'
import EditPost from './components/EditPost'

class Home extends Component {
    constructor() {
        super()

        try {
            const user = logic.getUser()

            this.state = {
                user,
                view: null,
                stamp: null,
                postToEdit: null
            }
        } catch (error) {
            utils.showFeedback(error)
        }

    }

    render() {
        return <main className='main'>
            <header id='header'>
                <h3>Isdigram</h3>

                <button onClick={event => {
                    event.preventDefault()

                    this.props.onChatClick()
                }}>Chat</button>
            </header>

            <h1>hello, {this.state.user.name}!</h1>

            <PostList refreshStamp={this.state.stamp}
                onPostDeleted={() => this.setState({ stamp: Date.now() })}
                onEditButtonClicked={(post) => this.setState({ view: 'edit-post', postToEdit: post })} />

            {this.state.view === 'edit-post' && <EditPost postToEdit={this.state.postToEdit} onPostEdited={() => { this.setState({ view: null, stamp: Date.now() }) }} onCancelClick={() => this.setState({ view: null })} />}

            {this.state.view === 'create-post' && <CreatePost onCancelClick={() => this.setState({ view: null })} onPostCreated={() => this.setState({ view: null, stamp: Date.now() })} />}

            <footer className="footer">
                <button>home</button>
                <button onClick={() => {
                    this.setState({ view: 'create-post' })
                }}>+</button>
                <button onClick={() => {
                    this.props.onUserPageClick()
                }} >user</button>

            </footer>


        </main>
    }
}

export default Home