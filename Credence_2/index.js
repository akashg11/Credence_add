var express = require('express');
var index = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

Genre = require('./models/genres');
Movie = require('./models/movie');

mongoose.connect('mongodb://localhost/credence');
var db = mongoose.connection;

index.get('/',function(req,res){
    res.send("Hell buoy!");
});

index.get('/api/genres',function(req, res){
     Genre.getGenres(function(err, genre){
         if(err){
             throw err;
         }
         res.json(genre);
     });
});

index.get('/api/movie', function(req, res){
        Movie.getMovie(function(err, movie){
            if(err){
                throw err;
            }
            res.json(movie);
        });
});


index.listen(3000);
console.log('Running on port 3000........');