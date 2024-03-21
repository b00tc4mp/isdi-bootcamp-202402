import RoundButton from './RoundButton.mjs'

class Submitbutton extends RoundButton{
    constructor(){
        super()

        this.addClass('submit-button')
        this.setType('submit')
    }
}
export default Submitbutton