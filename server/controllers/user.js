const { sequelize, User } = require("../models");

const register = async (req, res) => {
  const { email, password } = req;
  try {
    const user = await User.create({
      email,
      password,
    });
  } catch (err) {
    console.error(err);
  }
};

const login = async (req, res) => {
  try {
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  register,
  login,
};
