"use strict";
const { Model } = require("sequelize");
const { Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Password extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Password.belongsTo(models.User);
      models.User.hasMany(Password);
    }
  }
  Password.init(
    {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      password: DataTypes.STRING,
      email: DataTypes.STRING,
      name: DataTypes.STRING,
      url: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "Password",
    }
  );
  return Password;
};
