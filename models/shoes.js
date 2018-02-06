module.exports = function(sequelize, DataTypes) {
  var Shoes = sequelize.define("Shoes", {
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
    shoeMin: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    shoeMax: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  Shoes.associate = function(models) {
    Shoes.belongsTo(models.Logos, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Shoes;
};