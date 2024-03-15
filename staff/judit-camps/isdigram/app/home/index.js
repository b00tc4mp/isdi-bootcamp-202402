// PRESENTATION
(function () {
    if (!logic.isUserLoggedIn()) {
        location.href = '../login'

        return
    }

    // HEADER
    var header = new Component('header')
    header.assembleTo(document.body)

    var headerTitle = new Component('h3')
    headerTitle.setText('Isdigram')

    var messageButton = new Component('button')
    messageButton.setText('messages')

    header.add(headerTitle, messageButton)


    // HOME
    var home = new Component('main')
    home.assembleTo(document.body)

    try {
        var user = logic.getUser()

        var title = new Component('h1')
        title.setText('Hello, ' + user.name + '!')

        home.add(title)

    } catch (error) {
        showFeedback(error)
    }

    var posts = new Posts

    home.add(posts)


    // FOOTER
    var footer = new Component('footer')
    footer.assembleTo(document.body)

    var homeButton = new Button
    homeButton.setText('home')

    var newPostButton = new Component('button')
    newPostButton.setText('+')
    newPostButton.onClick(function () {
        try {
            var createPostForm = new CreatePost
            home.add(createPostForm)
        } catch (error) {
            showFeedback(error)
        }
    })

    var exitButton = new Button
    exitButton.setText('log out')

    footer.add(homeButton, newPostButton, exitButton)

})()
