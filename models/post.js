const mongoose = require('mongoose');
const postScema = mongoose.Schema({
    id:{
        type:Number,
        required:true
    },

    name:{
        type:String,
        required:true,
        minlength:5,
        maxlength:80
        
    },

    author:{
        type:String,
        required:true,
        minlength:5,
        maxlength:80
        
    },
    content:{
        type:String,
        required:true,
        minlength:5,
        maxlength:200
        
    },
    date:{
        type:Date,

    },
    upvotes:{
        type:String,
        
    },
    downvotes:{
        type:String,
        
    }


})   

module.exports = mongoose.model("Post",postScema)