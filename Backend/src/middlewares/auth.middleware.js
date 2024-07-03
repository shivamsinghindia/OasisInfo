const jwt = require('jsonwebtoken')
const {User} = require('../models/user.models.js')
const { asyncHandler } = require('../utils/asyncHandler.js')

exports.authMiddleware = asyncHandler(async (req, res, next) => {
    //take out the token
    // it could be either in cookies or 
    //user could have sent it in the header
    const token = req.header("token");

    if (!token) {
        return res.json({ success: 0, message: "Unauthorized" });
    }

    try {
        const decoded = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        if (!decoded) {
            return res.json({ success: 0, message: "Invalid token" });
        }

        const id = decoded._id;

        // take out the details of the user from the db
        const user = await User.findById(id).select("-password -refreshToken");

        if (!user) {
            return res.json({ success: 0, message: "User not found" });
        }

        // place the obtained detail from db into the res object using any keyname (like user)
        req.user = user;
        next();
    } catch (err) {
        return res.json({ success: 0, message: "Unauthorised" });
    }
});