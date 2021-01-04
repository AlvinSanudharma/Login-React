const User = require("../models/user.model");
const bcryptjs = require("bcryptjs");

exports.RegisterUser = async (req, res) => {
  const { username, email, password } = req.body;
  const hasPassword = await bcryptjs.hash(password, 10);

  const user = new User({
    username: username,
    email: email,
    password: hasPassword,
  });

  user.save();

  return res.status(201).json({
    message: "User berhasil daftar",
  });
};

exports.LoginUser = async () => {
  const { username, password } = req.body;
  return res.status(200).json({
    message: "berhasil",
    username: username,
    password: password,
  });
};
