const postRouter=require('express').Router();
//const { response}= require('express')
const Post = require('../models/post')


//gets all notes//
postRouter.get('/',(request,response,next) => {
    Post.find({}).then(res =>{
        response.status(200).send(res)
        next();
    })
})
//get posts by specific author//
postRouter.get('/:author',(request,response,next) => {
    const author = request.params.author
    Post.find({author:author}).then((res) =>{
        response.status(200).send(res)
        next();
    })
})

//allows you to post//
postRouter.post('/newpost', async (request, response, next) =>{
    console.log(
         'making a request!'
    )
    const {author,content}=request.body;

//author and content in request body make a new post
    if (author && content){
        const postCount= await Post.countDocuments();

        const newPost = new Post({
            id:postCount + 1,
            author:author,
            content:content

        })

        newPost.save()
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
module.exports = postRouter