// PRESENTATION
(function () {
    var title = document.querySelector('h1')
    var logoutButton = document.getElementById('logoutBtn')
    var form = document.getElementById('postForm')
    var createButton = document.getElementById('createBtn')

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

    form.addEventListener('submit', function () {
        // call function to save form info into new array of posts in local storage

        var imageInput = document.getElementById('image')
        var image = imageInput.value

        var captionInput = document.getElementById('caption')
        var caption = captionInput.value

        try {
            logic.savePostInfo(image, caption)
            form.reset()
        } catch (error) {
            alert(error.message)
        }

    })

    // createButton.addEventListener('click', function () {
    //     // show form when clicking create button
    //     if (form.style.display === 'none')
    //         form.style.display = 'block'
    // })

})()
