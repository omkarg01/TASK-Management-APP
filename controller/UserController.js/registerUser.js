const UserModel = require("../../model/UserModel")
const { generateToken } = require("../../utils/generateToken")

exports.registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body

        const userExists = await UserModel.findOne({ email })

        if (userExists) {
            res.status(400)
            throw new Error('User already exists')
        }

        const user = await UserModel.create({
            name,
            email,
            password
        })

        if (user) {
            res.status(201).json({
                message: "User created successfully",
                token: generateToken(user._id),
                id: user._id,
                name,
                email
            })
        } else {
            res.status(400)
            throw new Error('Invalid user data')
        }
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
}