const axios = require("axios");

const posts = [
    {
        "title": "Garrett Reichman & The Funky Bunch",
        "name": "Vocal Coach",
        "url": "http://www.youtube.com/watch?v=99j0zLuNhi8",
        "userID": 69,
        "email": "gsreichman@gmail.com",
        "type": "Teacher"
    },
    {
        "title": "gsr",
        "name": "guitar",
        "url": "http://www.youtube.com/watch?v=99j0zLuNhi8",
        "userID": 1337,
        "email": "gsreichman@gmail.com",
        "type": "Student"
    },
    {
        "title": "rsg",
        "name": "ukelele, Guitar",
        "url": "http://www.youtube.com/watch?v=99j0zLuNhi8",
        "userID": 12,
        "email": "gsreichman@gmail.com",
        "type": "Teacher"
    },
    {
        "title": "test",
        "name": " vocals",
        "url": "http://www.youtube.com/watch?v=99j0zLuNhi8",
        "userID": 96,
        "email": "gsreichman@gmail.com",
        "type": "Student"
    },
    {
        "title": "duke nukem",
        "name": "drums",
        "url": "http://www.youtube.com/watch?v=99j0zLuNhi8",
        "userID": 2,
        "email": "gsreichman@gmail.com",
        "type": "Teacher"
    }
]

export default {
    getPosts: function () {
        return posts;
    },
    registerLogin: function (user) {
        return axios.post("/auth/register_login", user)
    },
    logout: function () {
        return axios.get("/auth/logout");
    }
}