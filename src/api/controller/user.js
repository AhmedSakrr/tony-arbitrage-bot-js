const User = require("../model/user");
const BigPromise = require("../middleware/BigPromise");
const cookieToken = require("../util/cookieToken");
const emailHelper = require("../util/emailHelper");
const crypto = require("crypto");
const logger = require("../logger");

exports.signup = BigPromise(async (req, res, next) => {
  const { name, email, password ,confirm_Password} = req.body;
  let userEmailCheck = await User.findOne({ email: email });
  if (!email) {
    return next(new Error("Please enter email"));
  }else if (userEmailCheck){
    return next(new Error("Email is Already Exist"));
  }else if (password !== confirm_Password) {
    return next(new Error("Password And Confirm Password Not Match"));
  }
  const user = await User.create({
    name,
    email,
    password,
  });
  user.password = undefined;
  cookieToken(user, res);
});

