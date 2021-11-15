const router = require("express").Router();
const MoviesModel = require('../models/Movies.model');

//CREATE
router.get('/movies/create', (req, res, next) => {
    res.render('movies/new-movie.hbs')
})

//POST
router.post("/create", (req, res) => {
    const { title, genre, plot, cast } = req.body;

    MoviesModel.create({title, gender, plot, cast})
    .then(movie => {
        res.redirect("/movies")
        })
      .catch(err => {
        res.render("movies/new-movie", { err })
      })
});

//LIST
router.get('/movies', (req, res, next) => {
    // res.render('/movies/movies.hbs')

    MoviesModel.find()
    .then((movies) => {           
           res.render('movies/movies.hbs', {movies: movies})
    })
    .catch((err) => {
    })
})

router.get('/movies/:id', (req, res, next) => {
    const {id} = req.params

    MoviesModel.findOne(id)
    .populate('id')
    .then((details) => {
        res.render('movies/movie-details.hbs', {details})
    })
    .catch((err) => {
        next(err)
    })
})

//CONNECT BOTH COLLECTIONS (MOVIES WITH CELEBRITIES)


module.exports = router;