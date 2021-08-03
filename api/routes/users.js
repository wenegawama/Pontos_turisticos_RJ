const router = require('express').Router()
const User = require('../models/User')
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
        try {
            const post = await Post.findById(req.params.id)
            if(post.username === req.body.username) {
                try {
                    await post.delete
                    res.status(200).json(" O Usuário é deletado com sucesso...")
                } catch(err){
                    res.status(500).json(err)           
                }
            } else {
                res.status(401).json("Deleção recusada, faça com a sua conta !")
            } 
            } catch(err){
                res.status(404).json("Usuário não encontrado")
            }                
})

//Create
//Read
module.exports = router