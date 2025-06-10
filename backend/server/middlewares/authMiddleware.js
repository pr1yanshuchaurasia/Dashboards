const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Check if Authorization header is missing or improperly formatted
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token provided or token format invalid" });
  }

  const token = authHeader.split(" ")[1]; // Bearer <token>

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach decoded payload to request object
    req.user = decoded;
    next();
  } catch (err) {
    // Handle token expiration
    if (err.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token has expired. Please login again." });
    }

    // Handle invalid token
    if (err.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Invalid token. Authentication failed." });
    }

    // Fallback for other errors
    return res.status(500).json({ message: "Authentication error", error: err.message });
  }
};

module.exports = verifyToken;
