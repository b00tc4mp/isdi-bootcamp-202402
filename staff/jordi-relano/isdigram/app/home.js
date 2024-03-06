(function () {
    var title = document.querySelector('h1');
    var logoutButton = document.querySelector('#logout-button');
    var createPost = document.querySelector('form');

    try {
        var user = logic.retrieveUser();

        title.innerText = 'Hello, ' + user.name + '!'
    } catch (error) {
        alert(error.message);
    }

    logoutButton.addEventListener('click', function () {
        logic.logoutUser();

        var loginAddress = location.href.replace('home', 'login');

        location.href = loginAddress;

    })

    createPost.addEventListener('submit', function (event) {

        event.preventDefault();

        var imageInput = document.getElementById('image');
        var image = imageInput.value;

        var postInput = document.getElementById('post');
        var text = postInput.value;

        try {
            logic.createPost(image, text);

            createPost.reset();


        } catch (error) {
            alert(error.message);

        }

    })
})()