const jwt = require('jsonwebtoken');
const UserModel = require("../model/UserModel")

exports.protect = async (req, res, next) => {
    try {
        let token

        if (
            req.headers.authorization &&
            req.headers.authorization.startsWith('Bearer')
        ) {
            try {
                token = req.headers.authorization.split(' ')[1]

                const decoded = jwt.verify(token, process.env.JWT_SECRET)

                req.user = await UserModel.findById(decoded.id).select('-password')
                next()
            } catch (error) {
                console.error(error)
                res.status(401)
                throw new Error('Not authorized, token failed')
            }
        }

        if (!token) {
            res.status(401)
            throw new Error('Not authorized, no token')
        }
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
}
