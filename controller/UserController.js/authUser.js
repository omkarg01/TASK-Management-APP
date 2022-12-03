const UserModel = require("../../model/UserModel")
const { generateToken } = require("../../utils/generateToken")

exports.authUser = async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await UserModel.findOne({ email })

        if (user && (await user.matchPassword(password))) {
            res.json({
                message: "login successful",
                _id: user._id,
                name: user.name,
                email: user.email,
                token: generateToken(user._id)
            })
        } else {
            res.status(400)
            throw new Error('Invalid email or password')
        }
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
            
        });
    }
}