const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Advert = require("./AdvertBody/structure");

const PORT = process.env.PORT || 3000;

// To Init this api tab "npm run server"

mongoose.connect('mongodb+srv://joaolopes:1234@cluster0.jhptj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(console.log("DB CONNECTION => SUCCESSFUL")).catch((err) => console.log(err));

app.use(express.json());

app.get("/getAllAds", async (req, res) => {
	const Ads = await Advert.find()
	res.send(Ads)
});

app.get("/getRandomAd", async (req, res) =>{
    const Ads = await Advert.find()
    function randomItem(Ads){
        return Ads[Math.floor(Math.random()*Ads.length)];
    }
    res.send(randomItem(Ads));
});

app.post("/postAd", async(req, res) =>{
    const newAdvert = new Advert(req.body);

    try{
        const savedAd = await newAdvert.save();
        res.status(200).json(savedAd);
    }
    catch(err){
        res.status(500).json(err);
    }
});

app.listen(PORT, () =>{
    console.log("Backend Server Running...")
});