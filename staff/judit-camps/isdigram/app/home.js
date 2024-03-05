// PRESENTATION
(function () {
    var title = document.querySelector('h1')
    var logoutButton = document.getElementById('logoutBtn')
    var newPostBtn = document.getElementById('newPostBtn')
    var postForm = document.getElementById('postForm')
    var formDiv = document.getElementById('formDiv')


    try {
        var user = logic.getUser(sessionStorage.username)
        title.innerText = 'Hello ' + user.name + '!'
    } catch (error) {
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

        newPostBtn.style.display = 'none'
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
            formDiv.style.display = 'none'
        } catch (error) {
            alert(error.message)
        }

        newPostBtn.style.display = 'block'

    })

})()
