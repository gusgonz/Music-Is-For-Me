const router = require("express").Router();
const postController = require("../../controllers/postController");
const userController = require("../../controllers/userController");

// route: "/api/posts"
router.route("/posts")
    .get(postController.findAll)
    .post(postController.create);

// route: "/api/users/:id"
router.route("/users/:id")
    .get(userController.findByID)


module.exports = router;