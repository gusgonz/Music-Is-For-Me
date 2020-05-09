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
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
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