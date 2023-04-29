const express=require("express");
const Moviesss=require('../models/movieCategory')

const router=express.Router()

router.get("/",async(req,res)=>{
    try{
        const movieCategories= await Moviesss.find()
            res.json(movieCategories)
    }catch(err){
        res.send('error'+err)
    }
})
router.post('/',async(req,res)=>{
    const movieCategory=new Moviesss({
     
        category:req.body.category
     
    })
    try{
const a1=await movieCategory.save()
res.json(a1)
    }catch(err){
res.send('error')
    }
})



module.exports = router;