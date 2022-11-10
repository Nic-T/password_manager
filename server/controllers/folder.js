const { sequelize, Folder, Password } = require("../models");

const createFolder = async (req, res) => {
  try {
    const { name } = req.body;

    const folderEntry = await Folder.create({
      name: name,
    });
    res.json(folderEntry);
  } catch (err) {
    console.error(err);
  }
};

const getFolders = async (req, res) => {
  try {
    const folderEntries = await Folder.findAll();
    res.json(folderEntries);
  } catch (err) {
    console.error(err);
  }
};

const getFolderContent = async (req, res) => {
  try {
    const { id } = req.body;
    const folderContent = await Password.findAll({ where: { FolderId: id } });
    res.json(folderContent);
  } catch (err) {
    console.error(err);
  }
};

const editFolder = async (req, res) => {
  try {
    const { id, name } = req.body;
    const folderEntry = await Folder.findOne({
      where: { id: id },
    });

    if (name != folderEntry.name) {
      await folderEntry.update({ name: name });
    }
    res.json("name updated");
  } catch (err) {
    console.error(err);
  }
};

const deleteFolder = async (req, res) => {
  try {
    const { id } = req.body;
    await Folder.destroy({ where: { id: id } });
    res.json("Folder deleted");
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  createFolder,
  getFolderContent,
  getFolders,
  editFolder,
  deleteFolder,
};
