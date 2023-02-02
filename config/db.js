const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
const connectDB=()=>{
    mongoose.connect("mongodb+srv://amit:friendzone1234@friendzone.pg2hxzy.mongodb.net/?retryWrites=true&w=majority")
                .then(()=>{
                    console.log("Connected to friendzone-backend Database")
                })
                .catch((error)=>{
                    console.log("Error connecting to friendzone-backend Database",error.message)
                })
            }

module.exports=connectDB;
