/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('points', {
    points_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    points_food_Ref: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    points_text: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'points',
    schema: 'dbo'
  });
};
