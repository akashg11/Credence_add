var mongoose = require('mongoose');

var movieSchema = mongoose.Schema({
    name:{
        type : String,
        required:true
    },
    create_date:{
        type: Date, 
        default: Date.now
    }
});

var Movie = module.exports = mongoose.model('Movie', movieSchema);

//Get Genres

module.exports.getMovie= function(callback, limit){
    Movie.find(callback).limit(limit);
}