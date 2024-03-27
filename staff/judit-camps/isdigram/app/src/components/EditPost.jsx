import { logger, showFeedback } from "../utils";
import logic from "../logic.mjs";
import { Component } from "react";

class EditPost extends Component {
    constructor() {
        logger.debug('EditPost')
        super()

    }

    componentDidMount() {
        logger.debug('EditPost -> componentDidMount')
    }

    componentWillUnmount() {
        logger.debug('EditPost -> componentWillUnmount')
    }

    handleSubmit = event => {
        event.preventDefault()

        const form = event.target
        const newText = form.text.value

        logger.debug('EditPost -> handleSubmit', newText)

        try {
            logic.editPostText(this.props.post.id, newText)

            form.reset()

            this.props.onPostEdited()

        } catch (error) {
            showFeedback(error)
        }
    }

    handleCancelClick = () => this.props.onCancelClick()

    render() {
        logger.debug('EditPost -> render')

        return <section className="edit-post">
            <form onSubmit={this.handleSubmit}>
                <label>Text</label>
                <input id="text" type="text" placeholder={this.props.post.caption} />

                <button type="submit">save changes</button>
            </form>
            <button onClick={this.handleCancelClick}>Cancel</button>
        </section>
    }
}

export default EditPost