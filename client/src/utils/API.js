const axios = require("axios");


export default {
    getPosts: function () {
        return axios.get("/api/posts");
    },
    registerLogin: function (user) {
        return axios.post("/auth/register_login", user)
    },
    logout: function () {
        return axios.get("/auth/logout");
    }
}