const {request}= require('express');
const express = require('express');
const app =express();
const port= 4000;
const mongoose= require('mongoose');
require('dotenv').config();
const bodyParser= require('body-parser');
const postRouter= require('./controller/post');
const usersRouter= require('./controller/users')

const config= {
    useNewUrlParser: true,
    useUnifiedTopology:true
}

mongoose.connect(process.env.MONGODB_URI,config)
.then(() =>{
    console.log("Successfully connected to MongoBD");
})
.catch(err=> {
    console.error('Some problem occurred', err)
})

app.use(bodyParser.json());
app.use('/post', postRouter)
app.use('/users',usersRouter)


app.listen(process.env.PORT, ()=> {
    console.log('Express App is working', process.env.PORT)
});