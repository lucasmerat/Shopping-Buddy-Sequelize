const orm = require("../config/orm");

const item = {
  show: function(cb) {
    orm.selectAll("items", function(res) {
      cb(res);
    });
  },
  add: function(col1, val1, cb) {
    orm.insertOne("items", col1, val1, function(res) {
      cb(res);
    });
  },
  update: function(newBoolean, condition, cb) {
    orm.updateOne("items", newBoolean, condition, function(res) {
      cb(res);
    });
  },
  delete: function(col1, val1, cb) {
    orm.deleteOne("items", col1, val1, function(res) {
      cb(res);
    });
  }
};

module.exports = item;
