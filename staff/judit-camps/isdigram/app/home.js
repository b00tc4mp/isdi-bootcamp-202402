// PRESENTATION
(function () {
    if (!logic.isUserLoggedIn()) {
        location.href = 'login.html'
        return
    }

    var title = document.querySelector('h1')
    var logoutButton = document.getElementById('logout-button')
    var newPostBtn = document.getElementById('new-post-button')
    var postForm = document.getElementById('post-form')
    var formDiv = document.getElementById('form-div')
    var cancelBtn = document.getElementById('cancel-post-button')
    var postsSection = document.querySelector('#posts-section')

    try {
        var user = logic.getUser()
        title.innerText = 'Hello ' + user.name + '!'

    } catch (error) {
        console.error(error)
        alert(error.message)
    }

    logoutButton.addEventListener('click', function () {
        // calling the function to logout the user and going back to the login page
        logic.logoutUser()

        var loginAddress = location.href.replace('home', 'login')
        location.href = loginAddress
    })

    newPostBtn.addEventListener('click', function (event) {
        event.preventDefault()

        formDiv.style.display = 'block'
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

        newPostBtn.style.display = 'block'
        var imageElem = document.createElement('img')
        imageElem.src = image

    })

    cancelBtn.addEventListener('click', function () {
        formDiv.style.display = 'none'
        newPostBtn.style.display = 'block'
    })

    function renderPost() {
        try {
            var postsLatestFirst = logic.retrievePostsLatestFirst()

            postsSection.innerHTML = ''

            postsLatestFirst.forEach(function (post) {
                var article = document.createElement('article')
                article.id = post.id

                var authorHeading = document.createElement('h3')
                authorHeading.innerText = post.author.username

                var image = document.createElement('img')
                image.src = post.image

                var caption = document.createElement('p')
                caption.innerText = post.caption

                var dateTime = document.createElement('time')
                dateTime.innerText = post.date

                article.append(authorHeading, image, caption, dateTime)

                if (post.author.id === logic.getLoggedInUser()) {
                    var deletePostButton = document.createElement('button')
                    deletePostButton.id = post.id
                    deletePostButton.innerText = 'delete'

                    article.append(authorHeading, deletePostButton, image, caption, dateTime)

                    deletePostButton.addEventListener('click', function () {
                        if (confirm('delete post?'))
                            try {
                                logic.deletePost()
                                renderPost()
                            } catch (error) {
                                console.error(error)
                                alert(error.message)
                            }
                    })
                } else {

                    postsSection.appendChild(article)
                }
            })

        } catch (error) {
            console.log(error)
            alert(error.message)
        }
    }
    renderPost()


})()
