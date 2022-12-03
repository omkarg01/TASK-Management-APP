const UserModel = require("../../model/UserModel")

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
        updatedUser,
        message:"user profile updated"
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