"use strict";

const { Model, Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Folder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Folder.belongsTo(models.User);
      models.User.hasMany(Folder);
    }
  }
  Folder.init(
    {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Folder",
    }
  );
  return Folder;
};
