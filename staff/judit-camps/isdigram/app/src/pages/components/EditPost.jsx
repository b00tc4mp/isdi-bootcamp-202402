import utils from "../../utils.mjs";
import logic from "../../logic.mjs";
import { Component } from "react";

class EditPost extends Component {
    constructor(props) {
        super(props)

        try {
            this.state = {
                postToEdit: this.props.postToEdit
            }
        } catch (error) {
            utils.showFeedback(error)
        }
    }

    render() {
        return <section className="edit-post">
            <form action="" onSubmit={event => {
                event.preventDefault()

                const form = event.target
                const newText = form.caption.value

                logic.editPostText(this.state.postToEdit.id, newText)

                this.props.onPostEdited()
            }}>
                <label htmlFor=""></label>
                <input id="caption" type="text" placeholder={this.state.postToEdit.caption} />

                <button>save changes</button>
            </form>
            <button onClick={() => {
                this.props.onCancelClick()
            }}>Cancel</button>
        </section>
    }
}

export default EditPost