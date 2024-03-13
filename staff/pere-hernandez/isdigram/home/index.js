//presentation

(function () {
    if (!logic.checkLoggedInStatus()) {
        location.href = '../login'

        return
    }

    var home = new Component('main')

    home.assembleTo(document.body)

    var header = new Header

    home.add(header)

    var greeting = new Component('h2')
    var greetingText

    try {
        var user = logic.retrieveUser()

        greetingText = 'Hello, ' + user.username + '!'
    } catch (error) {
        alert(error.message)
    }    

    greeting.setText(greetingText)

    home.add(greeting)

    var menu = new Menu

    home.add(menu)

    var posts = new Posts

    home.add(posts)

    var footer = new Footer

    home.add(footer)
})()