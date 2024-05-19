const asyncHandler = require("express-async-handler")

//@desc Register a User
//@route POST /api/users/register
//@access public 
const registerUser = asyncHandler(async (req, res) => {
    res.json({message: "Register the User" });
} );

//@desc Login a User
//@route POST /api/users/login
//@access public 
const loginuser = asyncHandler( async (res, req)=> {
    res.json({ message: "User successfully logged in." });
});

//@desc Current User info
//@route GET /api/users/current
//@access private 
const currentuser = asyncHandler(async (res, req) => {
    res.json({ message: "Current user information"});
} );


module.exports = {registerUser, loginuser, currentuser}