/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Food', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CategoryRef: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Name: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    Time: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Dificulty: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Count: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Favorite: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Note: {
      type: DataTypes.STRING,
      allowNull: true
    },
    PicType: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    New: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Food',
    schema: 'dbo'
  });
};
