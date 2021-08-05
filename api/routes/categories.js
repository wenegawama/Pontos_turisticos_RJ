const router = require('express').Router()
const Category = require("../models/Category")

//Uma categoria
router.post("/", async (req, res) => {
    const newCat = new Category(req.body)
    try {
        const savedCat = await newCat.save()
        res.status(200).json(savedCat)
    } catch(err){
        res.status(500).json(err)
    }
})

//Todas as categorias

router.post("/", async (req, res) => {
    try {
        const cats = Category.find()
        res.status(200).json(cats)
    } catch(err){
        res.status(500).json(err)
    }
})

module.exports = router