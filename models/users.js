var bcrypt   = require('bcrypt-nodejs');

module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    id: { 
      type: DataTypes.INTEGER, 
      autoIncrement: true,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: true
    }, 
    clothing_type: {
      type: DataTypes.STRING,
      allowNull: true
    }, 
    measurement: {
      type: DataTypes.FLOAT,
      allowNull: true
    },    
    last_login: {
        type: DataTypes.DATE
    },
    status: {
        type: DataTypes.ENUM('active', 'inactive'),
        defaultValue: 'active'
    }
  });

  return Users;
};

