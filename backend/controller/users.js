const User = require('../models/users')

//POST
exports.createUser = async (req, res) => {
    try {
        const { name, email, phone } = req.body
        let newUser = new User({
            name: name,
            email: email,
            phone: phone
        })
        await newUser.save()
        res.status(201).send({
            success: true,
            message: "User Created Successfully",
            newUser
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Error in Creating User",
            error
        });
    }
}

//GETALL
exports.getAllUsers = async (req, res) => {
    try {
        const user = await User.find({})
        res.status(200).json(user)
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Error while getting all Users",
            error
        });
    }
}

//GET
exports.getUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findById(id)
        res.status(200).send({
            success: true,
            message: "Single User fetched",
            user,
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Error while getting single user",
            error
        });
    }
}

//PUT
exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params
        const { name, email, phone } = req.body
        const updateData = { name, email, phone }
        const user = await User.findByIdAndUpdate(id, updateData, { new: true })
        res.status(200).send({
            success: true,
            message: "User Updated",
            user
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Error while updating user",
            error
        });
    }

}

//DELETE
exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        await User.findByIdAndDelete(id)
        res.status(200).send({
            success: true,
            message: "User Deleted"
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Error while deleting user",
            error
        });
    }

}