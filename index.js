const express = require('express')
const app = express()
const db=require('./database');

// const User = require('./Modal/UserModal');
// const userController = require('./controller/userController');

// app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World');
});


  
// app.post("/signup",async(req,res)=>{
//   console.log(req.body,'kk123');
//   let result = await userController.signup(req)
//   return res.status(200).json({"message" :result});
// });

app.listen(5000, ()=>{
  console.log("server listening successfully")
})


