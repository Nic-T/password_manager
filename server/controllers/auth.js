const { sequelize, User } = require("../models");
const passport = require("passport");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({ password: hashedPassword, email: email });

    res.json(user);
  } catch (err) {
    console.error(err);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email: email } });

    if (!user) {
      return console.error("User not found");
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return console.error("Password does not match");
    }

    req.session.userId = user.id;
    console.log(req.session.id);
    res.json("you are logged in");
  } catch (err) {
    console.error(err);
  }
};

const logout = async (req, res) => {
  try {
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  register,
  login,
  logout,
};
