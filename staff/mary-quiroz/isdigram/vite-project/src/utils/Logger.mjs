class Logger {
    static DEBUG = 0
    static INFO = 1
    static WARM = 2
    static ERROR = 3
    static FATAL = 4
    
    // constructor() {
    //  this.level = logger.DEBUNG
    //}

    level = Logger.DEBUG

    #buildMessage(messages){
        return `${new Date().toString()} - ${messages.join('')}`
    }

    debug(...messages){
        this.level < Logger.INFO && console.debug(`%${this.#buildMessage(messages)}`, 'color: greenyellow')
    }

    info(...messages){
        this.level < Logger.WARM && console.debug(`%${this.#buildMessage(messages)}`, 'color: dodgerblue')
    }

    warm(...messages){
        this.level < Logger.ERROR && console.debug(`%${this.#buildMessage(messages)}`, 'color: orange')
    }

    error(...messages) {
        this.level < Logger.FATAL && console.debug(`%${this.#buildMessage(messages)}`, 'color: tomato')
    }

    fatal(...messages) {
        console.error((`%${this.#buildMessage(messages)}`, 'background-color: red color: white; padding:0 .5rem'))
    }
    
}

export default Logger