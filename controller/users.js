const usersRouter=require('express').Router();
const { response}= require('express')
const Users = require('../models/users')



usersRouter.get('/',(request,response,next) => {
    Users.find({}).then(res =>{
        response.status(200).send(res)
        next();
    })
})

//allows you to signup//
usersRouter.post('/signup', async (request, response, next) =>{
    console.log(
         'Hey there, Signup here!'
    )
    const {name,username,dateofbirth,email,password}=request.body;


    if (name, email,dateofbirth, username && password){
        const usersCount= await Users.countDocuments();

        const newUsers = new Users({
            id: usersCount + 1,
            name: name,
            username:username,
            email:email,
            dateofbirth:dateofbirth,
            password:password

        })

        newUsers.save()
        .then (res =>{
            response.status(201).send(res);

        })
        .catch(err => {
            console.log(err)
            response.sendStatus(501);
        })
    }
    else{
        response.status(400).send({message:"Check your request body"})
    }
})
module.exports = usersRouter