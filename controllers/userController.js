const db = require("../models");


module.exports = {
    findByID: function (req, res) {
        let id = req.params.id;
        db.User
            .findById(id)
            .select("-password")
            .then(user => {
                // console.log(user);
                return res.json(user);
            })
            .catch(err => res.status(422).json(err));
    },
    addSpotifyData: function (req, res) {
        console.log(req.body);
        let id = req.params.id;
        db.User
            .findById(id)
            .select("-password")
            .then(user => {
                const spotifyData = {
                    image_url: req.body.images[0].url,
                    spotify_url: req.body.external_urls.spotify,
                    display_name: req.body.display_name,
                    country: req.body.country
                }
                user.spotify_data = spotifyData;
                user.has_spotify = true;
                user.save();
                return res.json(user);
            })
            .catch(err => res.status(422).json(err));
    }
}