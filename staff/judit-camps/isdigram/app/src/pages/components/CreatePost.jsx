import utils from "../../utils.mjs";
import logic from "../../logic.mjs";

import { Component } from "react";

class CreatePost extends Component {
    constructor() {
        super()
    }

    render() {
        return <section className="create-post">

            <form onSubmit={event => {
                event.preventDefault()

                const form = event.target

                const image = form.image.value
                const text = form.text.value

                try {
                    logic.savePostInfo(image, text)
                    form.reset()
                    this.props.onPostCreated()
                } catch (error) {
                    utils.showFeedback(error)
                }

            }}>
                <label>Image</label>
                <input id="image" type="text" />

                <label htmlFor="">Text</label>
                <input id="text" type="text" />

                <button type="submit">Create post</button>
            </form>

            <button onClick={() => {
                this.props.onCancelClick()
            }}>Cancel</button>
        </section>
    }
}

export default CreatePost