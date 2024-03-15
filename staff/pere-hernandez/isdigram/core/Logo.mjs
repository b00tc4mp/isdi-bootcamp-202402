import Component from "./Component.mjs"
import Image from "./Image.mjs"

class Logo extends Component() {
    constructor(){
        super('div')

        const image = new Image
        image.setSource('../logo.png')
        image.setId('logo-image')

        const title = new Component('h1')
        title.setText('Isdigram')
        title.setId('logo-title')

        this.add(image, title)
    }
}

export default Logo