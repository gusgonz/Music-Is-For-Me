const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const spotifyDataSchema = new Schema({
    image_url: {
        type: String
    },
    spotify_url: {
        type: String
    },
    display_name: {
        type: String
    },
    country: {
        type: String
    }
});

const userSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
        required: false,
        minlength: 1,
        default: "anonymous"
    },
    lastName: {
        type: String,
        trim: true,
        required: false,
        minlength: 1,
        default: "anonymous"
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        required: true,
        minlength: 6
    },
    password: {
        type: String,
        required: true,
        trim: true,
        required: true,
        minlength: 8
    },
    date: {
        type: Date,
        default: Date.now
    },
    spotify_data: spotifyDataSchema,
    has_spotify: {
        type: Boolean,
        default: false
    }
}
);

userSchema.virtual('firstname').get(function () { return this.firstName.charAt(0).toUpperCase() + this.firstName.splice(1) });

const User = mongoose.model("User", userSchema);

module.exports = User;