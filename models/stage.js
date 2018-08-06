const mongoose = require("mongoose");

const StageSchema = new mongoose.Schema({
    id: { type: String, unique: true, required: true },
    details: String
})

let Stage = mongoose.model("stage", StageSchema);


module.exports = Stage