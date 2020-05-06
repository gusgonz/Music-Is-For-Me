const router = require("express").Router();
const passport = require("passport");

router.post("/register_login", (req, res, next) => {
    console.log("hit login");
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
            console.log("logged");
            return res.status(200).json(
                {
                    success: `logged in ${user.id}`,
                    user: user
                }
            );
        });
    })(req, res, next);
});

router.get("/logout", (req, res) => {
    req.logout();
    console.log("logged out");
    res.status(200).json({ success: `logged out` });
    // res.redirect("/");
});

module.exports = router;