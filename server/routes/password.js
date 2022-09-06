const express = require("express");
const router = express.Router();

const {
  createPasswordEntry,
  editPasswordEntry,
  deletePasswordEntry,
  generatePassword,
  getPasswordEntries,
  getPasswordEntry,
} = require("../controllers/password");

router.get("/get-password", getPasswordEntry);

router.get("/get-passwords", getPasswordEntries);

router.post("/create-password", createPasswordEntry);

router.put("/edit-password", editPasswordEntry);

router.delete("/delete-password", deletePasswordEntry);

router.post("/generate-password", generatePassword);

module.exports = router;
