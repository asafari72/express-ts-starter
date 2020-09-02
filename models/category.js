/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('category', {
    category_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    'دسته_ها': {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'category',
    schema: 'dbo'
  });
};
