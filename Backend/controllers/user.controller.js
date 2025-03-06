const userModel = require('../models/user.model');
const userService = require('../services/user.service'); 
const { validationResult } = require('express-validator');
const blacklistTokenModel = require('../models/blacklistToken.model');

module.exports.registerUser = async (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // const { firstname, lastname, email, password } = req.body;
    const { fullname, email, password } = req.body;
    const isUserAlreadyExist = await userModel.findOne({ email });
    if(isUserAlreadyExist) {
        return res.status(400).json({ message: 'User already exists' });
    }
    const hashedPassword = await userModel.hashPassword(password);

    const user = await userService.createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword
    });

    const token = user.generateAuthToken();
    console.log(user);

    res.status(201).json({ token, user });


}

module.exports.loginUser = async (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    // console.log("welcome");

    /**
     * Retrieves a user from the database by email and includes the password field in the result.
     *
     * @param {string} email - The email of the user to retrieve.
     * @returns {Promise<Object>} The user object with the password field included.
     * @throws {Error} If there is an error during the database query.
     */
    const user = await userModel.findOne({email}).select('+password');

    if(!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isMatch = await user.comparePassword(password);

    if(!isMatch) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = user.generateAuthToken();
    res.cookie('token', token);

    // res.cookie('token', token, {
    //     httpOnly: true,
    //     secure: process.env.NODE_ENV === 'production',
    //     maxAge: 3600000
    // });

    res.status(200).json({ token, user });

}

module.exports.getUserProfile = async (req, res, next) => {
    // console.log("user_controller\n");
    // console.log(req);
    res.status(200).json(req.user);


}

module.exports.logoutUser = async (req, res, next) => {
    res.clearCookie('token');
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];
    
    await blacklistTokenModel.create({ token });
    res.status(200).json({ message: 'Logged out successfully' });
}