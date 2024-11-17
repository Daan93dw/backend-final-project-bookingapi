import jwt from "jsonwebtoken";

// Authentication middleware: verifies JWT token
const auth = (req, res, next) => {
  // Excluded routes or methods
  if (req.path === "/login" || req.method === "GET") return next();

  const token = req.headers.authorization;
  const secretKey = process.env.AUTH_SECRET_KEY;

  // If there is no token, access is denied
  if (!token) {
    return res.status(401).json({
      message: "No token found, you cannot access this operation without it.",
    });
  }

  // Verifying token
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Token invalid." });
    }

    req.userId = decoded;
    next();
  });
};

export default auth;
