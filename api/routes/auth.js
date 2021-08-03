const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')

//Registrar
router.post("/registrar", async (req, res) => {
    try {
        //autentificação
        const salt = await bcrypt.genSalt(10)
        const hashedSenha = await bcrypt.hash(req.body.senha, salt)

        //creação de novo usuario autentificado

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            senha: hashedSenha
        })
        const user = await newUser.save()
        res.status(200).json(user)
    } catch(err){
        res.status(500).json(err)
    }
})

//Login

router.post("/login", async (req, res) => {
    try{
        const user = await  User.findOne({username: req.body.username})
        !user && res.status(400).json("Acesso não autorizadoo ! ")

        const validacao = await bcrypt .compare(req.body.senha, user.senha)
        !validacao && res.status(400).json("Acesso não autorizado")

        const {senha, ...outros} = user._doc
        res.status(200).json(outros)
    } catch(err){
        res.status(500).json(err)
    }
})


module.exports = router