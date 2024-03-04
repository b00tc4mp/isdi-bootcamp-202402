var form = document.querySelector('form');

var loginLink = document.querySelector('a')

// this is an event, when you put 'submit', you're saying that everything inside is going to do an action(an event), so it is going to submit everything you put inside the brackets of name, birthdate, etc
form.addEventListener('submit', function (event) {
    console.log('form submit');

    // we just want to focus on our server, not others
    event.preventDefault();

    // giving value to the body elements
    var nameInput = document.getElementById('name');
    var name = nameInput.value;

    var birthdateInput = document.getElementById('birthdate');
    var birthdate = birthdateInput.value;

    var usernameInput = document.getElementById('username');
    var username = usernameInput.value;

    var emailInput = document.getElementById('email');
    var email = emailInput.value;

    var passwordInput = document.getElementById('password');
    var password = passwordInput.value;

    try {
        registerUser(name, birthdate, email, username, password)

        form.reset()

        loginLink.click()
    } catch (error) {
        alert(error.message)
    }

})