const mongoose = require("mongoose");

const Interview = new mongoose.Schema({
    subject: {
        type: String,
        required: true 
    },
    question: {
        type: String,
        required: true 
    },
    answer: {
        type: String,
        required: true,
        select:false,
    },resource:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model("Interview", Interview);
