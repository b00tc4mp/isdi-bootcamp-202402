import { Component } from "react";

class Menu extends Component {
    constructor(){
        super()
    }

    render(){
        return <nav>
            <button className="transparent-button">
                <img className="nav-button-img" src="../../home.png"></img>
            </button>

            <button className="transparent-button">
                <img className="nav-button-img" src="../../chat.svg"></img>
            </button>
        </nav>
    }
}

export default Menu