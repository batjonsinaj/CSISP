const express = require('express');
const router = express.Router();
const config = require('./DB.js');

let db = config.DB;
// Bring in the Thumbnail Model
let Thumbnail = require('./thumbnail');

// Create Form
router.get('/create', function(req, res){
    res.send('create');
});

router.get('/', (req, res)=>{
    Thumbnail.find(function(err, thumnails){
    if(err){
      res.json(err);
    }
    else {
      res.json(thumnails);
    }
  });
});

// Create Process
router.post('/create', function(req, res){
    const url = req.body.url;
    const img = req.body.img;
    const rank = req.body.rank;
    console.log(req.body);
    let query = {url:url};
    Thumbnail.findOne(query, function(err, thumbnail){
        console.log(err);
        console.log(thumbnail);
        if(err){
            console.log(err)
        } else if (thumbnail) {
            console.log("Error: URL already in use");
            res.json({errmsg:"URL already in use"});
        } else {
            let newThumbnail = new Thumbnail({
                url:url,
                img:img,
                rank:rank
            });
            newThumbnail.save(function(err){
                if(err) {
                    console.log(err);
                    res.json('success');
                    return;
                } else {
                    console.log(newThumbnail);
                    res.json('success');
                }
            });
        }
    });
});

router.post('/update', (req, res) => {
    const url = req.body.url;
    const newRank = req.body.newRank;
    let query = {url:url};
    Thumbnail.findOne(query, function(err, thumbnail){
        console.log(err);
        console.log(thumbnail);
        if(err){
            console.log(err)
        } else if (thumbnail) {
            let id = thumbnail.id;
            console.log(id);
            Thumbnail.update({url:url}, { $set: { rank : newRank  } });
            Thumbnail.findOne({url:url}, function(err, thumbnail){
                console.log(thumbnail);
            });
        } else {
            res.json({errmsg: "No thumbnail found with that URL"})
        }
    });
}); 

router.get('/thumbnailList', (req, res)=>{
    Thumbnail.find().lean().exec(function (err, thumbnails) {
        res.json(thumbnails);
    });
});

router.delete('/deleteAll', (req, res)=>{
    Thumbnail.collection.deleteMany({});
});


module.exports = router;