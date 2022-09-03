const { sequelize, Password } = require("../models");

const createPasswordEntry = async (req, res) => {
  try {
    const { password, email } = req.body;

    const passwordEntry = await Password.create({
      password: password,
      email: email,
      UserId: req.session.userId,
    });
    res.json(passwordEntry);
  } catch (err) {
    console.error(err);
  }
};

const editPasswordEntry = async (req, res) => {
  try {
  } catch (err) {
    console.error(err);
  }
};

const deletePasswordEntry = async (req, res) => {
  try {
  } catch (err) {
    console.error(err);
  }
};

const generatePassword = async (req, res) => {
  try {
    const { length } = req.body;
    let password = "";
    const chars =
      "`1234567890~!@#$%^&*()-_+=qwertyuiop[]asdfghjkl;'zxcvbnm,./QWERTYUIOPADSFGHJKLZXCVBNM{}:><";

    for (let i = 0; i < length; i++) {
      let number = Math.floor(Math.random() * chars.length);
      password += chars.substring(number, number + 1);
    }
    res.json(password);
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  createPasswordEntry,
  generatePassword,
  editPasswordEntry,
  deletePasswordEntry,
};
