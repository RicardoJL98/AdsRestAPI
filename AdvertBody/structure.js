const mongoose = require('mongoose');

const AdStructure = new mongoose.Schema(
    {
        Title:{
            type: String,
            required: true,
        },
        Href:{
            type: String,
            required: true,
        },
        Banner:{
            type: String,
            required: true,
        },
        BodyContent:{
            type: String,
            required: true,
        },
    },
);

module.exports = mongoose.model("Advert", AdStructure);