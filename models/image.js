'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {

    static associate(models) {

      models.Image.belongsTo(models.Variant);
    }
  }
  Image.init({
    variantId: DataTypes.INTEGER,
    extension: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Image',
  });
  return Image;
};