 const mongoose = require("mongoose");

 const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please add the username"],
    },
    email: {
        type: String,
        required: [true, "please add the email address"],
        unique: [true, "Email address already take"],
    },
    password: {
        type: String,
        required: [true, "Please add the user password"],
    },
 },{
    timestamp: true,
 }
 );

 module.exports = mongoose.model("User", userSchema);