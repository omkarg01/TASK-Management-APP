const UserModel = require("../../model/UserModel")
const { generateToken } = require("../../utils/generateToken")

exports.updateUserProfile = async (req, res) => {
    try {
        const user = await UserModel.findById(req.user._id)

        if (user) {
            user.name = req.body.name || user.name
            user.email = req.body.email || user.email
            if (req.body.password) {
                user.password = req.body.password
            }

            const updatedUser = await user.save()

            res.json({
                _id: updatedUser._id,
                name: updatedUser.name,
                email: updatedUser.email,
                message: "user profile updated",
                token: generateToken(updatedUser._id)
            })
        } else {
            res.status(404)
            throw new Error('User not found')
        }
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
}