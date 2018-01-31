module.exports = function(sequelize, DataTypes) {
  var Logos = sequelize.define("Logos", {
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  // Logos.associate = function(models) {
  //   Logos.hasMany(models.Sizes);
  // };

  return Logos;
};