const express=require("express");
const Movie=require('../models/movie')

const router=express.Router()

router.get("/",async(req,res)=>{
    try{
        const movies= await Movie.find()
            res.json(movies)
    }catch(err){
        res.send('error'+err)
    }
})
router.post('/',async(req,res)=>{
    const movie=new Movie({
        name:req.body.name,
        category:req.body.category,
        img:req.body.img,
        description:req.body.description,
    })
    try{
const a1=await movie.save()
res.json(a1)
    }catch(err){
res.send('error')
    }
})
router.patch('/:id',async(req,res)=>{
    try{
        const movie=await Movie.findById(req.params.id)
        movie.name=req.body.name
        const a1=await movie.save()
        res.json(a1)
    }catch(err){
res.send('error')
    }
})

router.delete('/:id',async(req,res)=>{
    try{
        const food=await Movie.findById(req.params.id)
        movie.name=req.body.name
        const a1=await movie.remove()
        res.json(a1)
    }catch(err){
res.send('error')
    }
})



module.exports = router;