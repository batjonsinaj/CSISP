const mongoose = require('mongoose');

// Thumbnail Schema
const ThumbnailSchema = mongoose.Schema({
    url:{
        type: String,
        required: true
    },
    img:{
        type: String,
        required: true
    },
    rank:{
        type: String,
        required: true
    }
});

const Thumbnail = module.exports = mongoose.model('Thumbnail', ThumbnailSchema);