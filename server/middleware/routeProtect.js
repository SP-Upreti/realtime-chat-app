const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.Token;
        if (!token) {
            return res.status(401).json({ error: "Unauthorized, No Token" });
        }

        const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET); // Changed to TOKEN_SECRET for better convention

        const user = await User.findById(decodedToken.userid).select('-password');
        if (!user) {
            return res.status(404).json({ error: "User not found" }); // Use 404 for better HTTP status
        }

        req.user = user; // Set the user to req for later middleware or route handlers
        next();
    } catch (err) {
        console.error("Error in protectRoute:", err.message);
        res.status(400).json({ message: "RouteProtection Error", error: err.message });
    }
};

module.exports = protectRoute;
