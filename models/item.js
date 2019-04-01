module.exports = function(sequelize, DataTypes) {
  var Items = sequelize.define("Item", {
    item_name: {
      type: DataTypes.STRING,
      validate:{
        len: [1,140]
      }
    },
    purchased: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    } 
  });
  return Items;
};