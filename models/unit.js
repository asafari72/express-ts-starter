/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('unit', {
    unit_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    unit_base: {
      type: DataTypes.STRING,
      allowNull: true
    },
    unit_des: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'unit',
    schema: 'dbo'
  });
};
