const router = require("express").Router();
const CelebrityModel = require('../models/Celebrity.model');


//GET
router.get('/celebrities/create', (req, res, next) => {
    
    res.render('celebrities/new-celebrity.hbs')
})

//POST
router.post('/celebrities/create', (req, res, next) => {
    console.log(req.body)
    const {name, occupation, catchPhrase} = req.body 

    CelebrityModel.create({name, occupation, catchPhrase})
    .then(() => {
        // console.log(NewCelebrity)
        res.redirect('/celebrities')
    })
    .catch((err) => {
        // next('Boo-hoo!Unable to create new celebrity!')
        res.render('celebrities/new-celebrity.hbs')
        // console.log("Something went wrong " + err)
    })
});

//LIST OUR CELEBRITIES
router.get('/celebrities', (req, res, next) => {
    
    CelebrityModel.find()
    .then((celebrities) => {
        res.render('celebrities/celebrities.hbs', {celebrities: celebrities})
    })
    .catch((err) => {
        next(err)
    })
})



module.exports = router;