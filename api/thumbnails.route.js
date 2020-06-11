const express = require('express');
const router = express.Router();

// Bring in the Thumbnail Model
let Thumbnail = require('./thumbnail');
const thumbnail = require('./thumbnail');

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

router.get('/getLeaderboard')

router.delete('/deleteAll', (req, res)=>{
    Thumbnail.collection.deleteMany({});
});


module.exports = router;