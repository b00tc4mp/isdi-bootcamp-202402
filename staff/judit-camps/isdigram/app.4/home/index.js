// PRESENTATION
(function () {
    if (!logic.isUserLoggedIn()) {
        location.href = '../login'
        return
    }

    var footer = document.querySelector('footer')

    var homeTitle = document.querySelector('#home-title')
    var chatTitle = document.querySelector('#chat-user-title')


    var userButton = document.querySelector('#user-button')
    var newPostBtn = document.querySelector('#new-post-button')
    var cancelBtn = document.querySelector('#cancel-post-button')
    var homeButton = document.querySelector('#home-button')
    var messageButton = document.querySelector('#message-button')
    var backToChatsButton = document.querySelector('#back-to-chats-btn')


    var chatDiv = document.querySelector('#chat-bubbles-div')


    var postForm = document.querySelector('#post-form')
    var formDiv = document.querySelector('#form-div')
    // var editPostForm = document.querySelector('')
    var sendMessageForm = document.querySelector('#send-message-form')

    var userSection = document.querySelector('#user-section')
    var postsSection = document.querySelector('#posts-section')
    var chatSection = document.querySelector('#chat-section')
    var userList = document.querySelector('#user-list')
    var messageSection = document.querySelector('#message-section')

    var changePostTextSection = document.querySelector('#change-post-text')
    var cancelCaptionChangeButton = document.querySelector('#cancel-caption-change-button')


    try {
        var user = logic.getUser()
        homeTitle.innerText = 'Hello ' + user.name + '!'

    } catch (error) {
        console.error(error)
        alert(error.message)

        try {
            logic.logoutUser()
        } catch (error) {
            logic.cleanUpLoggedInUser()
        }

        location.href = '../login'
    }

    homeButton.onclick = function () {
        chatSection.style.display = 'none'
        userSection.style.display = 'none'

        postsSection.style.display = ''
        newPostBtn.style.display = ''
        messageButton.style.display = ''

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    newPostBtn.onclick = function (event) {
        event.preventDefault()

        formDiv.style.display = ''
    }

    postForm.onsubmit = function (event) {
        event.preventDefault()
        // call function to save form info into new array of posts in local storage

        var imageInput = document.getElementById('image')
        var image = imageInput.value

        var captionInput = document.getElementById('caption')
        var caption = captionInput.value

        try {
            logic.savePostInfo(image, caption)
            postForm.reset()
            formDiv.style.display = 'none'
            renderPost()

        } catch (error) {
            console.error(error)
            alert(error.message)
        }

        newPostBtn.style.display = ''
        var imageElem = document.createElement('img')
        imageElem.src = image

    }

    cancelBtn.onclick = function () {
        formDiv.style.display = 'none'
        newPostBtn.style.display = ''
    }

    cancelCaptionChangeButton.onclick = function () {
        changePostTextSection.style.display = 'none'
    }

    function renderPost() {
        try {
            formDiv.style.display = 'none'
            chatSection.style.display = 'none'
            var postsLatestFirst = logic.retrievePostsLatestFirst()

            postsSection.innerHTML = ''

            postsLatestFirst.forEach(function (post) {
                var article = document.createElement('article')
                article.id = post.id

                var postHeading = document.createElement('div')
                postHeading.classList = 'post-heading'

                var authorHeading = document.createElement('h3')
                authorHeading.innerText = post.author.username

                var image = document.createElement('img')
                image.src = post.image

                var caption = document.createElement('div')
                caption.classList = 'caption-div'

                var captionText = document.createElement('p')
                captionText.innerText = post.caption

                caption.appendChild(captionText)

                var dateTime = document.createElement('time')
                dateTime.innerText = post.date

                if (post.author.id === logic.getLoggedInUser()) {
                    var deletePostButton = document.createElement('button')
                    deletePostButton.id = post.id
                    deletePostButton.innerText = '...'

                    postHeading.append(authorHeading, deletePostButton)

                    var editPostButton = document.createElement('button')
                    editPostButton.innerText = 'edit'

                    caption.appendChild(editPostButton)

                    article.append(postHeading, image, caption, dateTime)

                    deletePostButton.onclick = function () {
                        if (confirm('delete post?'))
                            try {
                                logic.removePost(post.id)
                                renderPost()
                            } catch (error) {
                                console.error(error)
                                alert(error.message)
                            }
                    }


                    editPostButton.onclick = function () {
                        changePostTextSection.style.display = 'block'
                        var changeCaptionButton = document.querySelector('#change-caption-button')

                        changeCaptionButton.onclick = function () {
                            try {
                                var newCaptionInput = document.querySelector('#new-caption')
                                var newCaption = newCaptionInput.value

                                logic.editPostText(post.id, newCaption)

                                renderPost()
                            } catch (error) {
                                console.log(error)
                                alert(error.message)
                            }

                        }
                    }

                } else {
                    article.append(authorHeading, image, caption, dateTime)
                }
                postsSection.appendChild(article)

                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })
            })

        } catch (error) {
            console.log(error)
            alert(error.message)
        }
    }
    renderPost()


    function renderMessages(userId) {
        chatDiv.innerHTML = ''
        var messages = logic.retrieveMessagesWith(userId)

        try {
            messages.forEach(function (message) {
                var textBubble = document.createElement('div')
                textBubble.innerText = message.text
                if (message.from === sessionStorage.userId)
                    textBubble.classList.add('text__right')
                else
                    textBubble.classList.add('text__left')

                chatDiv.appendChild(textBubble)
                chatDiv.id = messages.id
            })


        } catch (error) {
            console.log(error)
            alert(error.message)
        }
    }

    messageButton.onclick = function () {
        sendMessageForm.style.display = 'none'
        postsSection.style.display = 'none'
        newPostBtn.style.display = 'none'
        messageButton.style.display = 'none'
        formDiv.style.display = 'none'

        chatSection.style.display = ''

        var listUsers = document.querySelector('#user-list')

        listUsers.innerHTML = ''

        try {
            var users = logic.retrieveUsers()

            users.forEach(function (user) {
                var item = document.createElement('li')

                if (user.status === 'online')
                    item.classList.add('user-list__item--online')
                else if (user.status === 'offline')
                    item.classList.add('user-list__item--offline')

                item.innerText = user.username


                item.onclick = function () {
                    messageSection.style.display = 'flex'
                    footer.style.display = 'none'
                    console.log('clicked ' + user.username + ' ' + user.id)
                    userList.style.display = 'none'

                    backToChatsButton.style.display = 'flex'
                    chatTitle.style.display = 'flex'
                    chatTitle.innerText = user.username
                    sendMessageForm.style.display = 'flex'

                    var hasChat = logic.retrieveMessagesWith(user.id)
                    if (!!hasChat)
                        renderMessages(user.id)

                    sendMessageForm.onsubmit = function (event) {
                        event.preventDefault()
                        try {
                            var textInput = document.querySelector('#input-text')
                            var text = textInput.value

                            logic.sendMessageTo(user.id, text)
                            sendMessageForm.reset()

                            renderMessages(user.id)

                        } catch (error) {
                            console.error(error)
                            alert(error.message)
                        }
                    }
                }
                userList.appendChild(item)
            })
        } catch (error) {
            console.log(error)
            alert(error.message)
        }
    }

    backToChatsButton.onclick = function () {
        footer.style.display = ''
        userList.style.display = ''
        messageSection.style.display = 'none'
        sendMessageForm.style.display = 'none'
        chatTitle.style.display = 'none'
        backToChatsButton.style.display = 'none'
    }


    userButton.onclick = function () {
        newPostBtn.style.display = 'none'
        chatSection.style.display = 'none'
        messageSection.style.display = 'none'
        formDiv.style.display = 'none'
        changePostTextSection.style.display = 'none'
        postsSection.style.display = 'none'
        messageButton.style.display = 'none'

        userSection.style.display = 'flex'

        var changePasswordButton = userSection.querySelector('#change-password-button')
        var logoutButton = userSection.querySelector('#logout-button')

        changePasswordButton.style.display = 'flex'
        logoutButton.style.display = 'flex'

        logoutButton.onclick = function () {
            // calling the function to logout the user and going back to the login page
            logic.logoutUser()

            location.href = '../login'
        }
    }
})()
