const { sequelize, User } = require("../models");

const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.create({
      email: email,
      password: password,
    });
    res.json(user);
  } catch (err) {
    console.error(err);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email: email } });
    if ((user.password = password)) {
      console.log("logged in");
      res.json("Logged in");
    }
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  register,
  login,
};
