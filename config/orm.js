const connection = require("./connection");

const orm = {
  selectAll: function(table, cb) {
    let queryString = `SELECT * FROM ${table};`;
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: function(table, col1, val1, cb) {
    let queryString = "INSERT INTO ?? (??) VALUES (?)";
    connection.query(queryString, [table, col1, val1], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  updateOne: function(table, newBoolean, condition, cb) {
    let queryString = `UPDATE ${table} SET ${newBoolean} WHERE ${condition}`;
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  deleteOne: function(table, col1, val1, cb) {
    let queryString = "DELETE FROM ?? WHERE ?? = ?";
    connection.query(queryString, [table, col1, val1], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  }
};

module.exports = orm;
