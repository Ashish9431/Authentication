const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    posts:[{
        post_image:{type:String,required:true},
        caption:{type:String,required:true},
        

    }]
})