const express = require('express')
const app = express()
require('dotenv').config()
app.use(express.json())
const mongoose = require('mongoose')
const authRoute = require('./api/routes/auth')
const userRoute = require('./api/routes/users')
const postRoute = require('./api/routes/posts')
const router = require('express').Router()

mongoose.connect(process.env.MONGO_URL_CONNECT,
    {
        useNewUrlParser: true ,
        useUnifiedTopology: true,
        useCreateIndex:true 
    }).then(() => console.log('Conectou com sucesso com o MongoDB')).catch((err) => console.log(err))
    //console.log('nome do banco de dados', process.env.MONGO_DB)
    //console.log('nome do usuario', process.env.MONGO_USER)
    //console.log('nome do usuario', process.env.MONGO_PASSWORD)
    

app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/posts', postRoute)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log("Iniciandoo o servidor express.")
})