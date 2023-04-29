const mongoose=require('mongoose');

const movieSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    
    category:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
   

})
module.exports=mongoose.model('Movie',movieSchema)