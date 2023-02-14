const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');

const app = express();

mongoose.connect("mongodb+srv://nehafunctionup:functionup@cluster0.vagtsgm.mongodb.net/neha11-DB%22", {useNewUrlParser: true})
.then(()=> console.log("Connected to database"))
.catch((err)=> console.log(err.message))

app.use(express.json());
app.use(multer().any());

const route = require('./route/route');

app.use('/', route);

app.listen(3000, (err)=>{
    if(err) return console.log(err);
    console.log("Application is running...");
});