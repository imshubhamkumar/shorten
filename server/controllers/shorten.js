const express = require("express");

const router = express.Router();

const Shorten = require('../Model/urlShorten.module');

router.post  ('/create_shorten', async (req, res, next) => {
    const newId = Shorten.randomString(8, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
    try {
      const isExists = await Shorten.findOne({
        urlId: newId
    });
      
   if(!isExists){
    const urlDetails = new Shorten({
        urlId: newId,
        theUrl: req.body.theUrl,
        createdAt: new Date()
    });
    urlDetails
    .save()
    .then(result => {
      console.log(result);
      res.send(result);
    })
    .catch(err => {
      console.log(err.message);
    });
}
    } catch (error) {
      console.log(error);
    }
  
});

router.get('/:urlid', async (req, res, next) => {
  const id = req.params.urlid;

  try {
    
    const orgUrl = await Shorten.findOne({
      urlId: id
    });

    console.log(orgUrl);
    res.redirect(orgUrl.theUrl);

  } catch (error) {
    
  }
})

module.exports = router;