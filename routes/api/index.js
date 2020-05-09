const router = require("express").Router();
const postController = require("../../controllers/postController");
const userController = require("../../controllers/userController");

// route: "/api/posts"
router.route("/posts")
    .get(postController.findAll)
    .post(postController.create);

router.route("/posts/:id")
    .put(postController.edit)
    .delete(postController.delete)

// route: "/api/users/:id"
router.route("/users/:id")
    .get(userController.findByID)
    .put(userController.addSpotifyData);


module.exports = router;