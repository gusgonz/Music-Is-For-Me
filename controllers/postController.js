const db = require("../models");


module.exports = {
    findAll: function (req, res) {
        db.Post
            .find({})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    create: function (req, res) {
        db.Post
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    delete: function (req, res) {
        db.Post
            .findByIdAndDelete(req.params.id)
            .then(result => res.json(result))
            .catch(err => res.json(err));
    },
    edit: function (req, res) {
        db.Post
            .findById(req.params.id)
            .then(post => {

            })
            .catch(err => res.json(err));
    }
}