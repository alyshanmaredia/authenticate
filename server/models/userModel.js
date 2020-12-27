const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please Enter your name!"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Please Enter your Email!"],
        trim: true,
        unique: true
    },
    password:{
        type: String,
        required: [true, "Please Enter your Password!"],
        
    },
    role:{
        type: Number,
        default: 0
    },
    avatar:{
        type: String,
        default:"a"
    }   
},  {
        timestamps: true
    }
)

module.exports = mongoose.model("Users", userSchema)