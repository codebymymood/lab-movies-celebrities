const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

// router.get('/celebrities/create', (req, res, next) => {
    
//   res.render('celebrities/new-celebrity.hbs')
// })

module.exports = router;
