const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://akkatoch12:8219834387@cluster0.rfmkwdg.mongodb.net/'
    ).then(()=>{
        console.log("db connected successfully");
    }).catch((err)=>{
        console.log("failed to connect",err);
    })