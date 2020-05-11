const axios = require("axios");


export default {
    getPosts: function () {
        return axios.get("/api/posts");
    },
    createPost: function(data){
        return axios.post("/api/posts",data);
    },
    registerLogin: function (user) {
        return axios.post("/auth/register_login", user)
    },
    logout: function () {
        return axios.get("/auth/logout");
    },
    getSpotifyData: function (token) {
        return axios.get('https://api.spotify.com/v1/me', {
            headers: { 'Authorization': 'Bearer ' + token }
        });
    },
    saveSpotifyData: function (id, data) {
        return axios.put("/api/users/" + id, data);
    },
    getUser : function(id){
        return axios.get("/api/users/"+id);

    }
}