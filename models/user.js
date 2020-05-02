const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
        type: String
    },
    third_party_auth: [ThirdPartyProviderSchema],
    date: {
        type: Date,
        default: Date.now
    }
},
    { strict: false }
);

userSchema.virtual('firstname').get(function () { return this.firstName.charAt(0).toUpperCase() + this.firstName.splice(1) });

const User = mongoose.model("User", userSchema);

module.exports = User;