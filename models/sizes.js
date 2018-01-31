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
    inchMax: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  Sizes.associate = function(models) {
    Sizes.belongsTo(models.Logos, {
      // foreignKey: {
      //   allowNull: false
      // }
    });
  };

  return Sizes;
};