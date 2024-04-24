const mongoose = require('mongoose');
try{
    let connection = mongoose.connect('mongodb+srv://akkatoch12:8219834387@cluster0.rfmkwdg.mongodb.net/');
    console.log("db connected successfully");
}catch(error){
    console.log("unable to connect to db", error);
}

