const express = require("express");
const router = express.Router();

const {
  createPasswordEntry,
  editPasswordEntry,
  deletePasswordEntry,
  generatePassword,
} = require("../controllers/password");

router.post("/create-password", createPasswordEntry);

router.put("/edit-password", editPasswordEntry);

router.delete("/delete-password", deletePasswordEntry);

router.get("/generate-password", generatePassword);

module.exports = router;
