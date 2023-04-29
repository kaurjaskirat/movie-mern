


const express=require("express");
const mongoose=require('mongoose');
const  cors =require ("cors");
require('dotenv').config();

const app=express()


mongoose.set('strictQuery', true);


mongoose.connect(process.env.MongoDB,{
    useNewUrlParser:true},()=>

{
    console.log('DB connected')
    const fetched_data=  mongoose.connection.db.collection("movies")
    fetched_data.find({}).toArray(function(err,data){
        const movieCategory=mongoose.connection.db.collection("moviessses");
        movieCategory.find({}).toArray(function(err,catData){
            if(err) console.log(err);
            else {
                global.movies=data;
                global.moviessses=catData;
            }
        })
    })
})
   
app.use(express.json());
app.use(cors());

const movieRouter=require('./routes/movies')
app.use('/movies',movieRouter)

const moviesRouter=require('./routes/DisplayData')
app.use('/movies',moviesRouter)

const moviessRouter=require('./routes/movieCategories')
app.use('/movieCategories',moviessRouter)

app.listen(8001,function(){
    console.log('server started')
})