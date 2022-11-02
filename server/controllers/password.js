const { sequelize, Password } = require("../models");

const getPasswordEntries = async (req, res) => {
  try {
    const passwordEntries = await Password.findAll();

    res.json(passwordEntries);
  } catch (err) {
    console.error(err);
  }
};

const getPasswordEntry = async (req, res) => {
  try {
    const { id } = req.body;

    const passwordEntry = await Password.findOne({ where: { id: id } });

    res.json(passwordEntry);
  } catch (err) {
    console.error(err);
  }
};

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
    const { id, password, email } = req.body;
    const passwordEntry = await Password.findOne({
      where: { id: id },
    });

    if (password != passwordEntry.password) {
      await passwordEntry.update({ password: password });
    }

    if (email != passwordEntry.email) {
      await passwordEntry.update({ email: email });
    }
    res.json("password updated");
  } catch (err) {
    console.error(err);
  }
};

const deletePasswordEntry = async (req, res) => {
  try {
    const { id } = req.body;
    await Password.destroy({ where: { id: id } });
    res.json("Password deleted");
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

    const data = { password };

    res.json(data);
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getPasswordEntries,
  getPasswordEntry,
  createPasswordEntry,
  generatePassword,
  editPasswordEntry,
  deletePasswordEntry,
};
