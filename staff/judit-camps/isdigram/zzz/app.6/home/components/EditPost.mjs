import Button from "../../core/Button.mjs";
import Component from "../../core/Component.mjs";
import Form from "../../core/Form.mjs";
import Input from "../../core/Input.mjs";
import Label from "../../core/Label.mjs";
import logic from "../../logic.mjs";
import utils from "../../utils.mjs";


class EditPost extends Component {
    constructor(post) {
        super('section')

        this.addClass('edit-post')

        const editPostForm = new Form

        const textLabel = new Label
        textLabel.setFor('text')
        textLabel.setText('Text')

        const textInput = new Input
        textInput.setId('text')
        textInput.setType('Text')
        textInput.setValue(post.caption)

        const saveChangesButton = new Button
        saveChangesButton.setText('save changes')

        editPostForm.add(textLabel, textInput, saveChangesButton)

        const cancelButton = new Button
        cancelButton.setText('cancel')
        this._cancelButton = cancelButton

        this.add(editPostForm, cancelButton)

        editPostForm.onSubmit(event => {
            event.preventDefault()

            const newText = textInput.getValue()

            try {
                logic.editPostText(post.id, newText)
                this._onPostEditedCallback()
            } catch (error) {
                utils.showFeedback(error)
            }

        })

        this._onPostEditedCallback = null
        EditPost.active = true

    }
    static active = false


    onCancelClick(callback) {
        if (typeof callback !== 'function') throw new TypeError('callback is not a function')

        this._cancelButton.onClick(() => {
            EditPost.active = false
            callback()
        })
    }

    onPostEdited(callback) {
        if (typeof callback !== 'function') throw new TypeError('callback is not a function')

        this._onPostEditedCallback = () => {
            EditPost.active = false
            callback()
        }
    }
}


export default EditPost