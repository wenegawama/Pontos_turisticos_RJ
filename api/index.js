const express = require('express')
const app = express()
require('dotenv').config()
app.use(express.json())
const mongoose = require('mongoose')
const router = require('express').Router()
const authRoute = require('../api/routes/auth')
const userRoute = require('../api/routes/users')
const postRoute = require('../api/routes/posts')
const categoryRoute = require('../api/routes/categories')
const multer = require('multer')

mongoose.connect(process.env.MONGO_URL_CONNECT,
    {
        useNewUrlParser: true ,
        useUnifiedTopology: true,
        useCreateIndex:true 
    })
    .then(() => console.log('Conectou com sucesso com o MongoDB'))
    .catch((err) => console.log(err))
    
    const stockImagens = multer.diskStorage({
        destination:(req,file, cb) => {
            cb(null, "images")
        }, filename: (req, file,cb) => {
            cb(null, req.body.name)
        }
    })


const upload = multer({stockImagens: stockImagens})
app.post("/api/upload", upload.single("file"),(req, res) => {
    res.status(200).json("Imagem salvada com sucesso")
})

app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/posts', postRoute)
app.use('/api/categories', categoryRoute)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log("Iniciandoo o servidor express.....")
})






