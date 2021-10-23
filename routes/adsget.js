const Ad = require("../modules/adbody");
const router = require('express').Router(); 

router.get("/", async(req, res, next) =>{
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

module.exports = router;