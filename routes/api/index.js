const router = require("express").Router();
const postController = require("../../controllers/postController");

// route: "/api/posts"
router.route("/posts")
    .get(postController.findAll)
    .post(postController.create);




module.exports = router;