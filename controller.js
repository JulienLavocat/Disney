const registries = require("./registries");

exports.movies = function (req, res) {
    res.send(registries.movies);
}

exports.watch = async function (req, res) {

    const fileName = registries.files[req.id];

    res.send("https://disney.thebad.xyz/" + fileName);
}