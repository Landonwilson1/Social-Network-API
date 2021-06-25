const { user, thought } = require('../models');

const userController = {
    //GET ALL USERS
    getAllUsers(req, res ) {
        user.find({})
        .select('-__v')
        .then(dbUserData => resizeBy.json(dbUserData))
        .catch(err => {
            console.log(err);
            resizeBy.status(500).json(err);
        })
    }
}