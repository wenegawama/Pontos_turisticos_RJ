const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const authRoute = require('../api/routes/auth')
const userRoute = require('../api/routes/users')
const postRoute = require('../api/routes/posts')
const categoryRoute = require('../api/routes/categories')
const multer = require('multer')
const path = require("path")
const cors = require('cors')

dotenv.config()
app.use(express.json())
/*app.use(cors())
app.use((req,res,next)=> {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
})*/

app.use("/images", express.static(path.join(__dirname, "/images")))


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
            cb(null, "hello.jpg")
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
    console.log("Iniciando o servidorr express..")
})






