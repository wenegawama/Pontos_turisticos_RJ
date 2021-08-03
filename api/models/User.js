const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique:true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    senha: {
        type: String,
        required: true
    },
    fotoDePerfil: {
        type: String,
        default:""
    }
},{timestamps: true}
)

module.exports = mongoose.model("User", UserSchema)