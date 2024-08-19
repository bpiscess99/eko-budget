const asyncHandler = require("express-async-handler")
const User = require("../models/userModel");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs");

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_Secret, {expiresIn: "1d"})
};

// Register User 
const registerUser = asyncHandler(async (req, res)=> {
    const {name, email, password} = req.body;

    // Validation
    if(!name || !email || !password){
        res.status(400) 
    throw new Error("Please fill all required fields")
    };

    // If password length is less than 6
    if(password.length < 6){
        res.status(400);
        throw new Error("Password must be upto 6 characters")
    };

    // Check If email already exists
    const userExists = await User.findOne({email})
       if(userExists){
        res.status(400);
        throw new Error("User email already exists")
       }

    //  Create a new user 
    const user = await User.create({
        name,
        email,
        password
    });

    // Generate a token
    const token = generateToken(user._id)

    // Send HTTP-only cookie
res.cookie("token", token, {
    path: "/", // even if we will not set path it will be by default home page
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 86400), // 1 day
    sameSite: "none",
    secure: true,
});
    
    if(user){
        const {_id, name, email} = user;
        res.status(201).json({
            _id, name, email, token
        });
    }else{
        res.status(400);
        throw new Error("Invalid user Data")
    }
});

// Login User
// Login User
const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body;

    // Validation
    if(!email || !password){
     res.status(400);
     throw new Error("Please add email and Password");

    }
    //  Check If User exist
    const user = await User.findOne({email})
    if(!user){
        res.status(400);
        throw new Error("User not found please sign up")
    }

    // User exist, check if password is correct
    const passwordIsCorrect = await bcrypt.compare(password, user.password);

    // Generate Token
    const token = generateToken(user._id)

    // Send HTTP-only cookie
res.cookie("token", token, {
    path: "/",
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 86400), // 1 day
    sameSite: "none",
    secure: true,
});

  if(user && passwordIsCorrect){
    const{_id, name, email} = user;
    res.status(200).json({
        _id, name, email, token
    });
  }else{
    res.status(400);
    throw new Error("Invalid email or password")
}

});


// Logout User
const logoutUser = asyncHandler(async (req, res) => {
    res.cookie("token", "", {
        path: "/",
        httpOnly: true,
        expires: new Date(0), 
        sameSite: "none",
        secure: true,
    }); 
    return res.status(200).json({message: "User Successfully logout "})
});

module.exports = {
    registerUser,
    loginUser,
    logoutUser
}