const axios = require("axios");

const posts = [
    {
        "name": "Garrett Reichman & The Funky Bunch",
        "role": "Vocal Coach",
        "video": "http://www.youtube.com/watch?v=99j0zLuNhi8",
        "author_id": 69,
        "email": "gsreichman@gmail.com",
        "title": "Teacher",
        "description" : "sample description",
        "phone": "867-53-09"
    },
    {
        "name" : "gsr",
        "role" : "guitar",
        "video" : "http://www.youtube.com/watch?v=99j0zLuNhi8",
        "author_id" : 1337,
        "email" : "gsreichman@gmail.com",
        "title" : "Student",
        "description" : "sample description",
        "phone": "867-53-09"
    },
    {
        "name" : "rsg",
        "role" : "ukelele, Guitar",
        "video" : "http://www.youtube.com/watch?v=99j0zLuNhi8",
        "author_id" : 12,
        "email" : "gsreichman@gmail.com",
        "title" : "Teacher",
        "description" : "sample description",
        "phone": "867-53-09"
    },
    {
        "name" : "test",
        "role" : " vocals",
        "video" : "http://www.youtube.com/watch?v=99j0zLuNhi8",
        "author_id" : 96,
        "email" : "gsreichman@gmail.com",
        "title" : "Student",
        "description" : "sample description",
        "phone": "867-53-09"
    },
    {
        "name" : "duke nukem",
        "role" : "drums",
        "video" : "http://www.youtube.com/watch?v=99j0zLuNhi8",
        "author_id" : 2,
        "email" : "gsreichman@gmail.com",
        "title" : "Teacher",
        "description" : "sample description",
        "phone": "867-53-09"
    }
]

export default {
    getPosts : function(){
        return posts;
    },
    registerLogin : function(user){
        return axios.post("/auth/register_login",{user})
    },
    logout : function (){
        return axios.get("/auth/logout");
    }
}