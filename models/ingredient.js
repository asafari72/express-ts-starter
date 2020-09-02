/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ingredient', {
    ingredient_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ingredient_food_Ref: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ingredient_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ingredient_mount: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ingredient',
    schema: 'dbo'
  });
};
