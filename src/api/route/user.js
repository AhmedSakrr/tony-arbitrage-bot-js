const express = require("express");
const {
  home,
  signup,
} = require("../controller/user");
const { isLoggedIn } = require("../middleware/user");
const router = express.Router();

// router.route("/").get(home);

router.route("/signup").post(signup);


module.exports = router;
