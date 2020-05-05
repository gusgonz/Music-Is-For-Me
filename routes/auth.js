const router = require("express").Router();
const passport = require("passport");

router.post("/register_login", (req, res, next) => {
    console.log("hit");
    passport.authenticate("local", function (err, user, info) {
        if (err) {
            return res.status(400).json({ errors: err });
        }
        if (user === false) {
            return res.status(400).json({ errors: "Incorrect Password" });
        }
        console.log(user);
        req.logIn(user, function (err) {
            if (err) {
                return res.status(400).json({ errors: err });
            }
            return res.status(200).json({ success: `logged in ${user.id}` });
        });
    })(req, res, next);
});

module.exports = router;