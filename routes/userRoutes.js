const express = require('express');
const { getUserProfile, registerUser, updateUserProfile, authUser } = require('../controller/UserController.js');
const router = express.Router();

router.get("/getUser/:id", getUserProfile);
router.post("/register", registerUser);
router.put("/editUser/:id", updateUserProfile)
router.post("/login", authUser)

module.exports = router;