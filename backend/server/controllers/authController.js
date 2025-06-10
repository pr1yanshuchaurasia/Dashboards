const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../models/db");

// Register User
exports.register = (req, res) => {
  const { name, email, password } = req.body;

  db.query("SELECT * FROM users WHERE email = ?", [email], async (err, results) => {
    if (err) return res.status(500).json({ message: "Database error", error: err });

    if (results.length) {
      return res.status(400).json({ message: "Email already registered" });
    }

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      db.query(
        "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
        [name, email, hashedPassword],
        (err) => {
          if (err) return res.status(500).json({ message: "Registration failed", error: err });
          res.status(201).json({ message: "User registered successfully" });
        }
      );
    } catch (hashError) {
      res.status(500).json({ message: "Password hashing failed", error: hashError });
    }
  });
};


// Login User (with iat and exp timestamps)
exports.login = (req, res) => {
  const { email, password } = req.body;

  db.query("SELECT * FROM users WHERE email = ?", [email], async (err, results) => {
    if (err) return res.status(500).json({ message: "Database error", error: err });

    if (!results.length || !(await bcrypt.compare(password, results[0].password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const payload = { id: results[0].id };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });

    const decoded = jwt.decode(token); // decode to get iat and exp

    res.status(200).json({
      token,
      iat: new Date(decoded.iat * 1000).toLocaleString(), // Issued At (readable)
      exp: new Date(decoded.exp * 1000).toLocaleString(), // Expires At (readable)
      user: {
        name: results[0].name,
        email: results[0].email,
      }
    });
  });
};

// Get All Registered Users
exports.getUsers = (req, res) => {
  db.query("SELECT id, name, email FROM users", (err, results) => {
    if (err) return res.status(500).json({ error: "Database error", details: err });
    res.status(200).json(results);
  });
};
