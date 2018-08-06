const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    id: { type: String, unique: true, required: true },
    firstName: { type: String, unique: false, required: true },
    lastName: { type: String, unique: true, required: true },
    emailId: { type: String, unique: true, required: true },
    password: { type: String, unique: true, required: true },
    userName: { type: String, unique: true, required: true },
    progress: Array
})

let User = mongoose.model("user", UserSchema);


module.exports = User