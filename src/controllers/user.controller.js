// const path = require("path");

const express = require("express");
// const { route } = require("../../../day-1/src/controllers/user.controller");

const User = require("../models/user.models");

const uploads = require("../middlewares/uploads");

const router = express.Router();
router.get("", async (req, res) => {
  try {
    const users = await User.find().lean().exec();

    return res.status(200).send(users);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.post("", uploads.single(profilePic), async (req, res) => {
  try {
    console.log(path.join(__dirname,"../uploads"));
    return res.status(200).send("users");
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
