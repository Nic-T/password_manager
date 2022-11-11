const express = require("express");
const router = express.Router();

const {
  createFolder,
  getFolders,
  getFolderContent,
  editFolder,
  deleteFolder,
} = require("../controllers/folder");

router.post("/create-folder", createFolder);

router.get("/get-folders", getFolders);

router.get("/get-folder-content", getFolderContent);

router.put("/edit-folder", editFolder);

router.delete("/delete-folder", deleteFolder);

module.exports = router;
