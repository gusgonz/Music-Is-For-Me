const db = require("../models");


module.exports = {
    findAll: function (req, res) {
        db.Post
            .find({})
            .sort({ date: 'desc' })
            .then(dbModel => res.status(200).json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    create: async function (req, res) {
        console.log("hit create")
        let flag = await db.Post
            .exists({ author_id: req.body.author_id });

        console.log(flag);

        if (!flag) {
            console.log("this");
            db.Post
                .create(req.body)
                .then(post => res.status(200).json(post))
                .catch(err => res.status(422).json(err));
        } else {
            console.log("that");
            db.Post
                .findOneAndReplace({ author_id: req.body.author_id }, req.body)
                .then(post => res.status(200).json(post))
                .catch(err => res.status(422).json(err));
        }
    },
    delete: function (req, res) {
        db.Post
            .findByIdAndDelete(req.params.id)
            .then(result => res.json(result))
            .catch(err => res.json(err));
    }
}