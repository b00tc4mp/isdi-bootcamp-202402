// PRESENTATION
(function () {
    if (!logic.isUserLoggedIn()) {
        location.href = '../login'
        return
    }

    var homeTitle = document.querySelector('#home-title')

    var userButton = document.getElementById('#user-button')
    var logoutButton = document.getElementById('logout-button')
    var newPostBtn = document.getElementById('new-post-button')
    var cancelBtn = document.getElementById('cancel-post-button')
    var homeButton = document.querySelector('#home-button')
    var messageButton = document.querySelector('#message-button')

    var postForm = document.getElementById('post-form')
    var formDiv = document.getElementById('form-div')
    // var editPostForm = document.querySelector('')

    var postsSection = document.querySelector('#posts-section')
    var chatSection = document.querySelector('#chat-section')
    var userList = document.querySelector('#user-list')

    var changePostTextSection = document.querySelector('#change-post-text')
    var cancelCaptionChangeButton = document.querySelector('#cancel-caption-change-button')


    try {
        var user = logic.getUser()
        homeTitle.innerText = 'Hello ' + user.name + '!'

    } catch (error) {
        console.error(error)
        alert(error.message)
    }

    homeButton.addEventListener('click', function () {
        postsSection.style.display = ''
        chatSection.style.display = 'none'
        newPostBtn.style.display = ''
        messageButton.style.display = ''

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })


    newPostBtn.addEventListener('click', function (event) {
        event.preventDefault()

        formDiv.style.display = ''
    })

    postForm.addEventListener('submit', function (event) {
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

    })

    cancelBtn.addEventListener('click', function () {
        formDiv.style.display = 'none'
        newPostBtn.style.display = ''
    })

    cancelCaptionChangeButton.addEventListener('click', function () {
        changePostTextSection.style.display = 'none'
    })

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

                    deletePostButton.addEventListener('click', function () {
                        if (confirm('delete post?'))
                            try {
                                logic.removePost(post.id)
                                renderPost()
                            } catch (error) {
                                console.error(error)
                                alert(error.message)
                            }
                    })

                    editPostButton.addEventListener('click', function () {
                        changePostTextSection.style.display = 'block'
                        var changeCaptionButton = document.querySelector('#change-caption-button')

                        changeCaptionButton.addEventListener('click', function () {
                            try {
                                var newCaptionInput = document.querySelector('#new-caption')
                                var newCaption = newCaptionInput.value

                                logic.editPostText(post.id, newCaption)

                                renderPost()
                            } catch (error) {
                                console.log(error)
                                alert(error.message)
                            }

                        })
                    })

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

    userButton.addEventListener('click', function () {
        console.log('user page')
        logoutButton.style.display = 'flex'
        logoutButton.addEventListener('click', function () {
            // calling the function to logout the user and going back to the login page
            logic.logoutUser()

            location.href = '../login'
        })
    })

    messageButton.onclick = function () {
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
                userList.appendChild(item)
            })
        } catch (error) {
            console.log(error)
            alert(error.message)
        }
    }


})()
