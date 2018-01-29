module.exports = function(sequelize, DataTypes) {
  var Sizes = sequelize.define("Sizes", {
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    size: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    inchMin: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    InchMax: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });
};