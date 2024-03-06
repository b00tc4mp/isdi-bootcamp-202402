// te viene de logic.js donde está ubicado localStorage.users = JSON.stringify(users) después de haber pusheado el username y todo.


// var users = localStorage.users ? JSON.parse(localStorage.users) : []

//here we have an array with all the information about the users, so 1 object for user

// var users = []
// if(localStorage.users){
//   users = JSON.parse(localStorage.users);
// }else {
//     return users;
// }
var data = (function () {
    function findUser(callback) {
        var users = JSON.parse(localStorage.users || '[]');

        var user = users.find(callback);

        return user;
    }

    function insertUser(user) {
        var users = JSON.parse(localStorage.users || '[]')

        users.push(user);

        localStorage.users = JSON.stringify(users);
    }

    function insertPost(post) {
        var posts = JSON.parse(localStorage.posts || '[]');

        posts.push(post);

        localStorage.posts = JSON.stringify(posts);
    }

    return {
        findUser: findUser,
        insertUser: insertUser,
        insertPost: insertPost
    }
})()

