import { Component } from "react";
import logic from "../logic.mjs";

class EditPost extends Component{
    constructor(props){
        super(props)

        this.props.parameter
    }

    render(){
        return <div className="edit-post-div">
            <form className="edit-post-form" onSubmit={event => {
                event.preventDefault()

                const form = event.target

                const text = form.text.value

                try {
                    logic.updatePost(this.props.parameter.id, text)
                } catch (error) {
                    alert(error.message)
                }

                this.props.onEdited()
            }}
            >
                <label htmlFor="text"></label>
                <input id="text" className="edit-post-input" type="text" placeholder={this.props.parameter.comment}></input>

                <button className="edit-form-submit" type="submit">Edit</button>
            </form>

            <button className="cancel-edit-button" onClick={event => {
                event.preventDefault()

                this.props.onCancel()
            }}>Cancel</button>
        </div>
    }
}

export default EditPost