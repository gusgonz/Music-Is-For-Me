const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    author_id: {
        type: Schema.Types.ObjectId,
        ref: "Author"
    },
    title: {
        type: String
    },
    role: {
        type: String
    },
    video: {
        type: String
    },
    description: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;