const { validationResult } = require('express-validator');
const userServices = require('../services/user.service');
const userModel = require('../models/user.model');
module.exports.registerUser=  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const {fullname, email, password} = req.body; // fullname : {firstname, lastname}, email, password
    const hashedPassword = await userModel.hashPassword(password);
    const user = await userServices.createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword
    });
    const token = user.generateAuthTyoken();
    return res.status(201).json({ token,user });

}