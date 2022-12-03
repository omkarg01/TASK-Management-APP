const express = require('express');
const { getUserProfile, registerUser, updateUserProfile, authUser } = require('../controller/UserController.js');
const { protect } = require('../middleware/authMiddleware.js');
const router = express.Router();

router.post("/register", registerUser);
router.route("/profile").get(protect, getUserProfile).put(protect, updateUserProfile);
router.post("/login", authUser)

module.exports = router;