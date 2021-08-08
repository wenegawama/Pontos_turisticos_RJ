const router = require('express').Router()
const User = require('../models/User')
const Post = require('../models/Post')
const bcrypt = require('bcrypt')

//Update
router.put("/:id", async (req, res) => {   
    if(req.body.userId === req.params.id) {
        if(req.body.senha) {
            const salt = await bcrypt.genSalt(10)
            req.body.senha = await bcrypt.hash(req.body.senha, salt)
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id , {
                $set: req.body
            }, {new:true})
            res.status(200).json(updatedUser)
        } catch(err){
            res.status(500).json(err)
        }
    } else {
        res.status(401).json("Alteração recusada, faça na sua conta !")
    } 
    
})

//Delete
router.delete("/:id", async (req, res) => {   
    if(req.body.userId === req.params.id) {
        try {
            const user = await User.findById(req.params.id)
            try{
                await Post.deleteMany({username: user.username})
                await User.findByIdAndDelete(req.params.id)
                res.status(200).json(" O Usuário é deletado com sucesso...")
            } catch(err){
                res.status(500).json(err)
            }
        } catch(err){
            res.status(404).json("Usuario não encontrado")           
            }
    } else {
        res.status(401).json("Deleção recusada, faça com a sua conta !!!!")
    }            
})

//Get usuário

router.get("/:id", async (req, res) => {
    try {
        const user = await  User.findById(req.params.id)
        const { senha, ...outros } = user._doc
        res.status(200).json(outros)
    } catch(err){
        res.status(500).json(err)
    }
})

module.exports = router