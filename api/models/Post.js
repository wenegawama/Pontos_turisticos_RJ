const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    cidade:{
        type: String,
        required:true,
        unique:true
    },
    description: {
        type: String,
        required:true
    },
    foto:{
        type: String,
        required:false
    },
    username:{
        type: String,
        required:true
    },
    categories:{
        type:Array,
        required:false
    }
},{timestamps: true}
)

module.exports = mongoose.model("Post", PostSchema)