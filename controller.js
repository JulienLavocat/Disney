const S3 = require("aws-sdk").S3;
const S3S = require("s3-streams");

const S3Client = new S3({
    
});

const registries = require("./registries");

exports.movies = function(req, res) {
    res.send(registries.movies);
}

exports.watch = function(req, res) {

    

}