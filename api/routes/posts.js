const router = require('express').Router()
const User = require('../models/User')
const Post = require('../models/Post')


//Create post

router.post("/", async (req, res) => {   
    const newPost = new Post(req.body)
    try{
        const savedPost = await newPost.save()
        res.status(200).json(savedPost)
    } catch(err){
        res.status(500).json()
    }
})

//Update post
router.put("/:id", async (req, res) => {   
    //Primeiramente busco o post e depois comparo os post user name e nome do usuario no body,se igual, faço updade caso contrario não pode fazer a atualização
    try{
        const post = await Post.findById(req.params.id)
        if(post.username === req.body.username)
            try{
                updatedPost = await Post.findByIdAndUpdate(req.params.id,{
                    $set:req.body
                }, {new:true})
                res.status(200).json(updatedPost)
            }catch(err){
                res.status(500).json(err)
        }else {
            res.status(401).json("Atualização recuzada, só faça com seu post")
        }
    }catch(err){
        res.status(500).json(err)
    }


})
//Delete post
router.delete("/:id", async (req, res) => {   
    try{
        const post = await Post.findById(req.params.id)
        if(post.username === req.body.username)
            try{
                await post.delete()
                res.status(200).json("O post foi deletado ...")
            }catch(err){
                res.status(500).json(err)
        }else {
            res.status(401).json("Deleção recuzada, só faça com seu post")
        }
    }catch(err){
        res.status(500).json(err)
    }


})

//Get post

router.get("/:id", async (req, res) => {
    try {
        const post = await  Post.findByIdAndUpdate(req.params.id)
        res.status(200).json(post)
    } catch(err){
        res.status(500).json(err)
    }
})

//Get todos os posts
router.get("/:id", async (req, res) => {
    try {
        const post = await  Post.findByIdAndUpdate(req.params.id)
        res.status(200).json(post)
    } catch(err){
        res.status(500).json(err)
    }
})


module.exports = router