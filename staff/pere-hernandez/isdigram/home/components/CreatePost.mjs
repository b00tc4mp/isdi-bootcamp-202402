import Component from "../../core/Component.mjs";

import Form from "../../core/Form.mjs"
import Label from "../../core/Label.mjs"
import Input from "../../core/Input.mjs"
import Button from "../../core/Button.mjs";

import logic from "../../logic.mjs";

class CreatePost extends Component {
    constructor(){
        super('section')

        this.setClass('post-form-section')

        const form = new Form
        form.setId('new-post-form')

        const imageLabel = new Label
        imageLabel.setFor('image')
        imageLabel.setText('Paste your photo link here')

        const imageInput = new Input
        imageInput.setId('image')
        imageInput.setType('text')

        const commentLabel = new Label
        commentLabel.setFor('label')
        commentLabel.setText('Write a comment')

        const commentInput = new Input
        commentInput.setId('comment')
        commentInput.setType('text')

        const submitButton = new Button
        submitButton.setText('Post')
        submitButton.setId('postFormButton')
        submitButton.setType('submit')

        form.add(imageLabel, imageInput, commentLabel, commentInput, submitButton)

        const returnButton = new Button
        returnButton.setText('Return')
        returnButton.setId('return')

        this._returnButton = returnButton

        this.add(form, returnButton)

        form.onSubmit(event => {
            event.preventDefault()

            const image = imageInput.getValue()
            const comment = commentInput.getValue()

            try{
                logic.createPost(image, comment)

                this._onPostCreatedCallback()
            } catch (error) {
                alert(error.message)
            }
        })

        this._onPostCreatedCallback = null

        CreatePost.active = true
    }

    static active = false

    onReturnClick(callback){
        //validation

        if(typeof callback !== 'function')
            throw new TypeError ('callback is not a function')

        //logic

        this._returnButton.onClick(() => {
            CreatePost.active = false

            callback()
        })
    }

    onPostCreated(callback) {
        //validation

        if(typeof callback !== 'function')
            throw new TypeError ('callback is not a function')

        //logic

        this._onPostCreatedCallback = () => {
            CreatePost.active = false

            callback()
        }
    }
}

export default CreatePost
