const express=require("express");
const router=express.Router()

router.post('/movieData',(req,res)=>{
    try{
        // console.log( global.foods, global.foodssses)
        // res.send([global.foods, global.foodssses]) ---correct for foodapp
        res.send([ global.movies,global.moviessses])

    }catch(error){
console.error(error.message)
res.send("error")
    }
})


module.exports = router;