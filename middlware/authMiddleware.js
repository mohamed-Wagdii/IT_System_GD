const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
 try {
 const authHeaders = req.headers.authorization;

 if (!authHeaders) return res.json({ msg: "Token Not Found" });

 const token = authHeaders.split(" ")[1];

 const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

 req.user = decodedToken;

 next();
 } catch (error) {
 return next(new AppError("Invalid or expired token. Please login again.", 401));
 }
};


const adminOnly = (req, res, next) => {
 if (!req.user) {
 return next(new AppError("please, login", 401));
 }

 if (req.user.role !== 'admin') {
 return next(new AppError("only for Admin", 403));
 }
 next();
};

module.exports = {authMiddleware, adminOnly};


