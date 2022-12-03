const UserModel = require("../../model/UserModel")

exports.authUser = async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await UserModel.findOne({ email })

        if (user && (await user.matchPassword(password))) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email
            })
        } else {
            res.status(400)
            throw new Error('Invalid email or password')
        }
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
}