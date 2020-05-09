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
    }
}