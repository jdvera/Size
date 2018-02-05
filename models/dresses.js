module.exports = function(sequelize, DataTypes) {
  var Dresses = sequelize.define("Dresses", {
    size: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    bust: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    waist: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    hips: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  Dresses.associate = function(models) {
    Dresses.belongsTo(models.Logos, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Dresses;
};
