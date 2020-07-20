module.exports = function (sequelize, DataTypes) {
  var Stats = sequelize.define("Stats", {
    gil: DataTypes.INTEGER,
    hp: DataTypes.INTEGER,
    attack: DataTypes.INTEGER,
    defense: DataTypes.INTEGER,
    speed: DataTypes.INTEGER,
    potion: DataTypes.INTEGER,
  });

  Stats.associate = function (models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Stats.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Stats;
};
