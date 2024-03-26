import utils from "../utils.mjs";
import logic from "../logic.mjs";
import PostList from "../components/PostList";
import CreatePost from "../components/CreatePost";

import { Component } from "react";


class Home extends Component {
    constructor(){
        super()

        try {
            const user = logic.retrieveUser()

            this.user = user
            
        } catch (error) {
            utils.showFeedback(error)
        }

        this.state = {view: null, stamp: null}
    }
    render(){

        return <main className="main">
            <h1>Hello, {this.user.name}!</h1>
            <nav>
                <button 
                onClick = {event => {
                    event.preventDefault()
                    this.props.onChatClick()
                }
                }
                >💬</button>
                <button
                onClick={()=> this.props.onLogoutClick()}
                >🚪</button>
            </nav>

            <PostList refreshStamp = {this.state.stamp}/>



            {this.state.view === 'create-post' && <CreatePost onCancelClick ={()=> this.setState({view: null})} onPostCreated = {()=> {this.setState({view : null, stamp: Date.now()})}} />}

            <footer className="footer">
                
                <button onClick={()=> this.setState({view: 'create-post'})}
                >➕</button>

            </footer>
        </main>
    }
}

export default Home

