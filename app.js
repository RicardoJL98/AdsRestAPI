const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Ad = require("./modules/adbody");

const PORT = process.env.PORT || 3000;

// To Init this api tab "npm run server"

const adPostRoute = require("./routes/adspost");

const adGetRoute = require("./routes/adsget");

dotenv.config();

mongoose.connect('mongodb+srv://joaolopes:1234@cluster0.jhptj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(console.log("DB CONNECTION => SUCCESSFUL")).catch((err) => console.log(err));

app.use(express.json());

app.get('/ads', function (req, res){
    Ad.find()
    .then(result =>{
        res.status(200).json({
            AdList: result
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error:err
        })
    });
});


app.use("/api/adspost", adPostRoute);

app.use("/api/adsget", adGetRoute);

app.listen(PORT, () =>{
    console.log("Backend Server Running...")
});