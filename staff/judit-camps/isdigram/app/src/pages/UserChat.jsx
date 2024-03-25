import { Component } from "react";

class UserChat extends Component {
    constructor(props) {
        super(props)

        this.state.userToChat = user.username
    }


    render() {
        return <main>
            <header>
                <h3>Isdigram</h3>
                <button onClick={event => {
                    event.preventDefault()
                    this.props.onHomeClick()
                }}>Home</button>
            </header>
            <button onClick={event => {
                event.preventDefault()

                this.props.onBackToChatsClick()
            }} >back to chats</button>
            <h3>{this.state.userToChat}</h3>


        </main>

    }

}


export default UserChat