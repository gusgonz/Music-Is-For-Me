const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    name : {
        type: String
    },
    email : {
        type: String
    },
    phone : {
        type: String
    },
    authorID : {
        type: ObjectId
    },
    title : {
        type: String
    },
    role : {
        type: String
    },
    video : {
        type: String
    },
    description : {
        type: String
    }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;