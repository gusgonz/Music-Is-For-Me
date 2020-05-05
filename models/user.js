const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const spotifyDataSchema = new Schema({

// });

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
    // spotify_data: {

    // }
}
);

userSchema.virtual('firstname').get(function () { return this.firstName.charAt(0).toUpperCase() + this.firstName.splice(1) });

const User = mongoose.model("User", userSchema);

module.exports = User;