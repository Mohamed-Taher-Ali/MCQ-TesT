const
    { User } = require('../models/user'),
    { respError } = require('../config/helper'),
    {
        addUserValidate,
        updateUserValidate
    } = require('../validations/users');


exports.getUsers = async () => {
    let users = await User.find();
    return users;
}


exports.updateUser = async (body) => {
    let { error } = updateUserValidate(body);
    if (error) return respError(error);

    let
        { name, score } = body,
        user = await User.findOneAndUpdate(
            name, score, { new: true }
        );

    return user.toJSON();
}


exports.checkUserName = async (name) => {
    let user = await User.findOne({ name });

    return (user?._id) ?
        respError("repeated name !") :
        { valid: true };
}


exports.addUser = async (body) => {
    let { error } = addUserValidate(body);
    if (error) return respError(error);

    let user = new User(body);
    user = await user.save();

    return user.toJSON();
}