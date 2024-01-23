const User = require("../models/user.model");

const createUser = (req, res) => {
    User.create(req.body)
        .then(newUser => res.json(newUser))
        .catch(err => res.status(400).json(err))
}

const findOneUser = (req, res) => {
    User.findById({_id: req.params.id})
        .then(oneUser => res.json(oneUser))
        .catch(err => console.log(err))
}

module.exports = {
    createUser,
    findOneUser
}