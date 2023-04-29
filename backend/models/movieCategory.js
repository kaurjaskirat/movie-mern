const mongoose=require('mongoose');

const movieSchema=new mongoose.Schema({
   
    category:{
        type:String,
        required:true
    }
   

})
module.exports=mongoose.model('Moviesss',movieSchema)