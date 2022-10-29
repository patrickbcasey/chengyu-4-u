const mongoose = require("mongoose");

const ChengyuSchema = new mongoose.Schema({
    chinese: {
        type: String,
        required: true
    },
    jyutping: {
        type: String,
        required: true
    },
    literal: {
        type: String,
        required: true
    },
    meaning: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model("Chengyu", ChengyuSchema);