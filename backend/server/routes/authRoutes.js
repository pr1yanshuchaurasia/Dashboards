const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/register", authController.register);
router.post("/login", authController.login);

// Protected route example
router.get("/dashboard", authMiddleware, (req, res) => {
  res.json({ message: "Welcome to the car dashboard!", userId: req.user.id });
});

router.get("/users", authController.getUsers);
module.exports = router;

router.get("/api/protected", authMiddleware, (req, res) => {
  res.json({ message: "Access granted!", user: req.user });
});
