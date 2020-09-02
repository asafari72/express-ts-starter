/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('step', {
    step_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    step_food_Ref: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    step_name: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    step_text: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'step',
    schema: 'dbo'
  });
};
